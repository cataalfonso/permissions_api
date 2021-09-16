const TokenHelper=require('../utils/Token-helper');
const router= express.Router();

router.all('*', TokenHelper.accessTokenValidation());