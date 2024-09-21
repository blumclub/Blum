export default async function handler(req, res) {
  const { INSTAGRAM_TOKEN } = process.env;

  try {
    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,profile_picture_url,caption,username,media_url,permalink,media_type,thumbnail_url,timestamp&access_token=${INSTAGRAM_TOKEN}`);
    const data = await response.json();
    console.log(data.data)
    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    if (data.data && data.data.length > 0) {
      return res.status(200).json(data.data.slice(0,4));
      
    } else {
      return res.status(404).json({ message: 'No posts found' });
    }
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
