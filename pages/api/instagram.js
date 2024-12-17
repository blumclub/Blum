// pages/api/instagram.js

async function renewInstagramToken(token) {
  try {
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
    );
    const data = await response.json();

    if (data.access_token) {
      console.log('Token successfully renewed.');
      return data.access_token;
    } else {
      console.error('Failed to renew token:', data);
      throw new Error('Error renewing Instagram token.');
    }
  } catch (error) {
    console.error('Error during token renewal:', error);
    throw error;
  }
}

export default async function handler(req, res) {
  let { INSTAGRAM_TOKEN, APP_ACCESS_TOKEN } = process.env;

  try {
    // Validate token
    const validateResponse = await fetch(
      `https://graph.instagram.com/debug_token?input_token=${INSTAGRAM_TOKEN}&access_token=${APP_ACCESS_TOKEN}`
    );
    const validationData = await validateResponse.json();

    if (!validationData.data || !validationData.data.is_valid) {
      console.warn('Token expired or invalid, attempting renewal...');
      INSTAGRAM_TOKEN = await renewInstagramToken(INSTAGRAM_TOKEN);
    }

    // Fetch Instagram media
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url,timestamp&access_token=${INSTAGRAM_TOKEN}`
    );

    const data = await response.json();

    if (data.error) {
      console.error('Error fetching media:', data.error);
      return res.status(500).json({ error: data.error.message });
    }

    if (data.data && data.data.length > 0) {
      return res.status(200).json(data.data[0]);
    } else {
      console.warn('No posts found.');
      return res.status(404).json({ message: 'No posts found' });
    }
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
