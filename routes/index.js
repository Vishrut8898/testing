const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact.js');
const Appointment = require('../models/Appointment.js');
const Service = require('../models/Service.js');
const nodemailer = require('nodemailer');

// All Authors Route
router.get('/', async (req, res) => {
    const services = await Service.find();
    res.render('appointment');
})

module.exports = router;