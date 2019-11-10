const express = require('express');
const cors = require ('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Cat = require('./models/cat');

const app = express();
//app.get('/', (req, res)=>res.send('Hello World'));

const router = express.Router()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//utilisation de cors pour autoriser client externe à faire des requetes sur le server
app.use(cors ());
/*const server = '127.0.0.1:27017';
const database = "crash-course";
mongoose.connect(`mongodb://${server}/${database}`);*/

mongoose.connect('mongodb://localhost:27017/cats');
const connection = mongoose.connection;

    console.log('Miaou miaou mongo est là');


router.route('/cats').get((req, res) => {
    Cat.find((err, cats) => {
        if (err)
        console.log(err);
        else
        res.json(cats);
    });
});

router.route('/cats/:id').get((req, res) => {
    Cat.findById(req.params.id, (err, cat) => {
        if (err)
        console.log(err)
        else
        res.json(cat);
    });
});

router.route('/cats/add').post ((req, res) => {
    let cat = new Cat(req.body);
    cat.save()
    .then(cat => {
        res.status(200).json({'cat': 'Added successfully'})
    })
    .catch(err => {
        res.status(400).send('Failed to create new record');
    })
})
router.route('/cats/update/:id').post((req, res) => {
    Cat.findById(req.params.id, (err, cat) =>{
        if(!cat){
            return next(new ERROR ('Could not load document'));
        }else{
            cat.name = req.body.name;
            cat.age = req.body.age;
            cat.sexe = req.body.sexe;
            cat.description = req.body.description;
            

            cat.save().then(cat =>{
                res.json('update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
    };
});
});

router.route('/cats/delete/:id').get((req, res) => {
    Cat.findByIdAndRemove({_id: req.params.id}, (err, cat)=> {
        if(err){
            res.json(err);
        }else{
            res.json('Remove successfully');
        }
    
    })
})


app.use('/', router);

app.listen(4001, ()=> console.log("Allo j'écoute"));