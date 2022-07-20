## Create custom Package:
=> Create account in [npmjs.com](https://www.npmjs.com/).
=> Create git for your package:
````
https://github.com/ravikumar181094/otp.git
````
=> Create Package
````
npm init
````
1. Unique package name `rv-otp-generator`
2. Version `1.0.0`
3. Description `To generate OTP`
4. Entry Point `index.js`
5. Git repository `https://github.com/ravikumar181094/otp.git`
6. Keywords `otp, otp-react`
7. Author `Ravi Kumar`
8. License `ISC`

=> Add `type` as `module` in `package.json`
````
"type" : "module",
````
=> Create `/index.js` file for Bussiness Logics.

## Publish Package

=> Login node package manager using below command.
````
npm login
````
1. Enter username `ravikumar181094`
2. Enter password `**********`
3. Enter public email `ravikumar181094@gmail.com`
4. Enter `OTP` which received from you email

=> Check your npm login
````
npm whoami
````
=> Publish our package using `npm publish`
=> App Successfully Published
=> You can see the packages under `npmjs account -> Profile -> Packages`

## Commit Package In GIT

=> Initialize git 
````
git init
git remote add origin https://github.com/ravikumar181094/otp.git
git add .
git commit -m "initial commit"
git push -u origin master
````
## Re-publish Package
````
npm version 1.0.1
npm publish
````
## Consume our package

=> Install our packages
````
npm i rv-otp-generator
import generateOtp from 'rv-otp-generator'
````
=> call using `generateOtp(6)`


