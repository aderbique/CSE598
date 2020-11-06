'use strict';

const State = require('./ledger-api/state.js');

class PatientRecord extends State {

    constructor(obj) {
        super(PatientRecord.getClass(),[obj.username, obj.name]);
        Object.assign(this,obj);
    }

    //Helper Functions for reading and writing attributes
    getUsername() { return this.username }
    setUsername(newUsername) { return this.username=newUsername }
    getName() { return this.name }
    setName(newName) { return this.name=newName }
    getdob() { return this.dob }
    setdob(newdob) { return this.dob=newdob }
    getgender() { return this.gender }
    setgender(newgender) { return this.gender=newgender }

    getbloodtype() { return this.gender }
    setbloodtype(newbloodtype) { return this.blood_type=newbloodtype }

    //TASK 2 - Write a getter and a setter for a field called last_checkup_date

    //Helper functions

    static fromBuffer(buffer) {
        return PatientRecord.deserialize(Buffer.from(JSON.parse(buffer)));
    }

    toBuffer() {
        return Buffer.from(JSON.stringify(this));
    }

    static deserialize(data) {
        return State.deserializeClass(data, PatientRecord);
    }

    static createInstance(username, name, dob, gender, blood_type) {
        return new PatientRecord({username, name, dob, gender, blood_type});
    }

    static getClass() {
        return 'edu.asu.patientrecord';
    }


}

module.exports = PatientRecord;
