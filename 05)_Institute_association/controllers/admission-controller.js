var express = require('express');
var Admission = require('../models').Admission;
var CommonCntrl = require('./common-controller');
var EnquiryCntrl = require('./enquiry-controller');

var config = {};

config.err_messages = {
    'firstName' :"First Name",
    'lastName': "Last Name",
    'fatherName': "Father Name",
    'courseId': "CourseId",
    'admissionDate': "Admission Date"
};

config.expected_keys = [
    'firstName',
    'lastName',
    'fatherName',
    'enqId',
    'courseId',
    'status',
    'admissionDate'
];

config.not_null_keys = [
    'firstName',
    'lastName',
    'fatherName',
    'courseId',
];

config.required_keys = [
    'firstName',
    'lastName',
    'fatherName',
    'courseId',
    'admissionDate'

];

var CommonCntrl_obj = new CommonCntrl(config);

var insert = (req, res, next) => {
    
    if (typeof req.body.enqId != "undefined" && req.body.enqId != '') {

        EnquiryCntrl.isEnquiryIdExistsAlready(req.body.enqId, ( res1) => {
    
            if (res1.result) {
    
                isEnquiryIdAssignedAlready(req.body.enqId, ( res2 ) => {
    
                    if (res2.result) {
        
                        res.status(200).send({ err: ['EnquiryId is already assigned!'] });
                    } else {
        
                        insert_admission(req, res);
                    }
                });
    
            } else {
    
                res.status(200).send({ err: ['Invalid enquiry ID!'] });
            }
        });
    } else {

        insert_admission(req, res);
    }

};

var insert_admission = (req, res) => {

    var in_data = {};
    in_data = CommonCntrl_obj.check_inputs(req.body, true);

    if (in_data.err.length > 0) {

        res.status(200).send({ in_data });
    } else if ((typeof in_data.err.err != "undefined") && (in_data.err.err.length > 0)) {

        res.status(200).send({ in_data });
    } else {

        Admission.build(in_data.data).save()
        .then((result) => {

            res.status(200).send({ result: result, in_data: in_data });
        })
        .catch((error) => {

            res.status(200).send({ err: error });
        });
    }
}

var update = (req, res, next) => {

    var id = req.params.id;

    Admission.find({ where: { id: id } })
        .then((result) => {

            if (result === null) {

                res.status(200).send({ err: ["Record not found!"] });
            } else {

                var in_data = {};
                var in_data = CommonCntrl_obj.check_inputs(req.body);

                if (in_data.err.length) {
                    res.status(200).send({ in_data });
                } else {

                    Admission.update(in_data.data, { where: { id: id } })
                        .then((result) => {

                            res.status(200).send({ result: result, in_data: in_data });
                        })
                        .catch((error) => {

                            res.status(200).send({ err: error });
                        });
                }
            }
        })
        .catch((error) => {

            res.status(200).send({ err: error });
        });
};

var soft_delete = (req, res, next) => {

    var id = req.params.id;

    Admission.find({ where: { id: id } })
        .then((result) => {

            if (result === null) {

                res.status(200).send({ err: ["Record not found!"] });
            } else {

                var in_data = {
                    status: 'DELETED'
                };

                Admission.update(in_data, { where: { id: id } })
                    .then((result) => {

                        res.status(200).send({ result: result, in_data: 'Record deleted softly!' });
                    })
                    .catch((error) => {

                        res.status(200).send({ err: error });
                    });
            }
        })
        .catch((error) => {

            res.status(200).send({ err: error });
        });
};

var hard_delete = (req, res, next) => {

    var id = req.params.id;

    Admission.find({ where: { id: id } })
        .then((result) => {

            if (result === null) {

                res.status(200).send({ err: ["Record not found!"] });
            } else {

                Admission.destroy({ where: { id: id } })
                    .then((result) => {

                        res.status(200).send({ result: result, in_data: 'Record deleted successfully!' });
                    })
                    .catch((error) => {

                        res.status(200).send({ err: error });
                    });
            }
        })
        .catch((error) => {

            res.status(200).send({ err: error });
        });
};

var fetchAll = (req, res, next) => {

    Admission.findAll({
        attributes: ['firstName', 'lastName','fatherName','enqId','courseId','status','admissionDate']
    })
        .then((result) => {

            if (result === null) {

                res.status(200).send({ err: ["Records not found!"] });
            } else {

                res.status(200).send({ err: [], result: result });
            }
        })
        .catch((error) => {

            res.status(200).send({ err: error });
        });
};

var fetchById = (req, res, next) => {

    var id = req.params.id;

    Admission.find({ where: { id: id } })
        .then((result) => {

            if (result === null) {

                res.status(200).send({ err: ["Record not found!"] });
            } else {

                res.status(200).send({ err: [], result: result });
            }
        })
        .catch((error) => {

            res.status(200).send({ err: error });
        });
};

var isEnquiryIdAssignedAlready = (id, cb) => {

    Admission.find({ where: { enqId: id } })
        .then((result) => {

            if (result === null) {

                cb( { err: '', result: false } );
            } else {

                cb( { err: '', result: true } );
            }
        })
        .catch((error) => {

            return { err: error };
        });
};

const Op = Sequelize.Op
var updateAdmission = (req,res,next=>{
    var id = req.params.id;

    Enquiry.isEnquiryIdExistsAlready(id,(result3) =>{

        if(result3.result){
            isEnquiryIdAssignedAlready(id,(res4)=>{
                Admission.find({ where: { enqId:{[Op.ne]: id }}{} })
            });

        }
    });

});

module.exports = {
    insert: insert,
    update: update,
    fetchAll: fetchAll,
    fetchById: fetchById,
    hardDelete: hard_delete,
    softDelete: soft_delete
    
};