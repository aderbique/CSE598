'use strict';

const StateList = require('./ledger-api/statelist.js');

const PatientRecord = require('./patientrecord.js');

class PatientRecordList extends StateList {
    constructor(ctx) {
        super(ctx,'edu.asu.patientrecordlist');
        this.use(PatientRecord);
    }

    async addPRecord(precord) {
        return this.addState(precord);
    }

    async getPRecord(precordKey) {
        return this.getState(precordKey);
    }

    async updatePRecord(precord) {
        return this.updateState(precord);
    }

}

module.exports = PatientRecordList;
