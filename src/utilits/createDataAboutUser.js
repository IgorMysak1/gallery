export function CreateObj({ id, color, urls, user }) {
  this.id = id;
  this.user = {
    name: user.name,
    bio: user.bio,
    avatar: user.profile_image.large,
    portfolio_url: user.portfolio_url,
  };
  this.other = {
    color,
    picture_url: urls.full,
    location: user.location,
    amountLikes: user.total_likes,
    amountPhotos: user.total_photos,
  };
  this.social = {
    instagram: user.social.instagram_username,
    twitter: user.social.twitter_username,
  };
}
export const templateListOfPicture = (index) => ({
  id: index,
  user: {
    name: "Name",
  },
  other: {
    color: "#3e587b",
    picture_url: "img/loading.gif",
  },
});
