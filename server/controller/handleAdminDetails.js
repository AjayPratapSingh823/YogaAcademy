const handleAdminDetails = async (req, res)=>{

    const details = {
        fullname: "Ajay Pratap",
        email: "ajaypratap@gmail.com",
        password: 123456
    }

    try {
        res.status(200).send(details)
    } catch (error) {
        res.status(203).send(error)
    }
}
module.exports = {handleAdminDetails}