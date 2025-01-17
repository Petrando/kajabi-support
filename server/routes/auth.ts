import express, { Request, Response} from "express"
const router = express.Router();

const { sayHi, signup, signin, signout, requireSignin } = require('../controllers/auth.controller');
const { userSignupValidator } = require('../validator');

router.get('/', sayHi);
router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

router.get('/hello', requireSignin, (req:Request, res:Response) => {
	res.send('hello there');
})

module.exports = router;