const { Owner, Dog } = require("../models/TestModel");
const mongoose = require('mongoose');
const toId = mongoose.Types.ObjectId;

const Test1 = async (req, res) => {
    const dogs = [
        { name: "PinkyDog" },
        { name: "ZeroDog" },
        { name: "Alidog" },
    ]

    const owners = [
        { name: "Truong" },
        { name: "Mina Young" },
    ]

    const newDogs = await Dog.create(dogs);
    const newOwners = await Owner.create(owners)

    res.json({ newDogs, newOwners })
}

const Test2 = async (req, res) => {
    const owner = toId(req.params.owner) //  chuyển params owner về ojb ID
    const dog = await Dog.findById(req.params.dog).exec(function (err, dog) {
        if (err) return handleError(err);
        console.log('The', dog);

        dog.owner = [...dog.owner,owner];
        dog.save()

        res.json(dog)
    });;
    // const dog = await Dog.findByIdAndUpdate(req.params.dog, {owner: req.params.owner});

    console.log("done!")
}

const Test3 = async (req, res) => {
    const dogs = await Dog.find({}).populate({ path: 'owner', model: 'Owner' })
    res.json(dogs)

}




module.exports = {
    Test1,
    Test2,
    Test3,
}