import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAACUCAMAAAAanWP/AAAAMFBMVEXk5ueutLfp6+y2vL+qsLTa3d6nrrHAxcfN0dPW2dvGyszKztCxt7rg4uPR1NbT19hPi+N+AAAEWklEQVR4nO2c25akIAxFJdwUQf//b0ft7rGqLEsu0UOt5X6a6adDKoYQEprm5ubm5uaGD0ILyISIgu66btQhTP9Gy0lhkjs66cUfXvb6e1YQWmmMEo8oZeQQ0MJi6Kx4lr4uwXZocUcMVr0XvyxA2LHij5lGuyt9XUCl+omOxP9gq/wBSEeJn/AarfUNbaz6iRYtdoNLUC+UQ8t9Ic7tV/0WLfgJuR8tv0B/ou0X6tGfo74e/3epnvOrv47402WJn+lq2L/8sc4dPFr6tNnaPNeZURZtfhpMtvqJAa0/33Vm80vsEYaScoU39FD5WhbKx5q/L1SPTT5Dcq6zNT9QflnYWTAjTn6p54s5+MBipy52nQmD+nip55CvepD5iUH8BMx7yj/cGQXyHoa4s9BCzB9ZlToGk3dSUbb2AGjnYlIPynuii4JHQIqGNLDJRxxaqDzb/AMReopPKisOIZ8rbgp1y4fKv179LX+V/9XOg4k8Xx44Wc5aC5Bta+RS7yE31d+dsjUNl/NgEma+48p3HxYRgWeiY/IeVI8JU6UBI74hhhKnAJapWpYiIabMMxFYSrQg8U1mN8AzwAJ5M5abXwFbq0L5x4u8HCq/mlMDUn6x+bEXo8W1KnBTTOHWBfX8Wb4uyRy8RrdkFDXEoG7lHsm+WVdo11nQ2ceWOpqBU9p/H40PbAd4JDN61tFIOJPTColtRHqCkvVX04T6Q6J+U5HtF5JKhgZ2wtqDxvj4WeP4BIXYs5cNtdl+gfqIDVj5egLmC6TdzsjZf/HCwbO0T2hnPoydKVeh1z8Tdn4BNVkerS0Gos761zDkve2+Zmh0WkHrrPzD2rarclRun3nEWC+E+T9oOWnQBrSiOBaluht6Z+3qO64fRt1Uv4ww9lYoY8zr0K6a/2iEtEOVkTMEPTirtro30dMYaVtdzyKomaRbKT5sV5s1KG/72ZvQ2icFk3SvDoz+bg1i/hWg3wLRaAuqbEp428KyT2qcSLf6BonZjUcZ7+0fMaK9uMxMeiifWllR/spMlEIvma50HxZw0RMU1PQ897kveHvFQYZark6MLee/4KA9s9s8Yc49B4fMweholDzxE2ANN3u4czay+DpOGUqe0SBD+grT/8BfAKXMO4gslOXeht2ZAWern/feKHDvsof6FV8EutLtV7i2ACqe6M6D6QOG2H6G5Q6Drdc3GcNw6R4OSt6n6i+2P8MwfQHFzUoFDRccFPbG801I5FH0CgjfWGK+/oI3oHBBZ6XgAhv62f6R2+jJOFtTgvKZXy9a+C95PdqMY2WlZEQfyn/wi52cpwTAG9YjPvkFNL6hMgYygn9Fxs/ooKnI88Xcr5oov46Y/x+fFnwY5gpYSXwCqru4snBE2oRLemPj2STNFzG9e8SISQr9lflO2uORxDIOx0tC3llRtrYSHzrZBok5SSh6oqW+Iz7rr+GMuyF+ppphFJGf6NBDo6yQhKR520mHJ179zU0M/wDMYjzK/prFVgAAAABJRU5ErkJggg=="
        
    }
}, {timestamps: true});

const User= mongoose.model('User', userSchema);

export default User;

