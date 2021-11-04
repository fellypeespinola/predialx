import bcrypt from 'bcrypt'

export const comparePassword = (password: string, hash: string, cb : Function) => {
    bcrypt.compare(password, hash, (err: any, result: boolean) => {
        if(err) return cb(err, false)
        cb(null, result)
    });
}