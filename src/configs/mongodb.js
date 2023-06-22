const mongoose = require('mongoose')

const connectDB = async (req, res) => {
	try {
		const conn = mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})

		console.log('Connected to MongoDB')
	} catch (error) {
		console.log('Error: ', error)
	}
}

module.exports = {connectDB }