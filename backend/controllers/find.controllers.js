import dotenv from "dotenv";
dotenv.config();

const getFindData = async(req,res) => {
    const {query} = req.params;
    const {maxlength} = req.params;
    try {
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxlength}&q=${query}&key=${process.env.YT_API_KEY_2}`;
        const response = await fetch(url);
        console.log(url);
        if(response.ok){
            const data = await response.json();
            return res.status(200).json(data);
        }
        return res.status(400).json({error: "not found"});
    } catch (err) {
        res.status(500).json({error: err.message});
        console.error("Error in getFindData", err);
    }
}

export {getFindData};
