const Service = require('../models/Service');

// Get all services
exports.getAllServices = async (req, res) => {
    const services = await Service.find();
    res.json(services);
};

// Create a new service
exports.createService = async (req, res) => {
    const { title, description, price } = req.body;
    const newService = new Service({ title, description, price });
    await newService.save();
    res.status(201).json({ message: "Service created", service: newService });
};

// Additional CRUD operations can be added here...