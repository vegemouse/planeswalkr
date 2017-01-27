import { Player } from './player.model';

export const PLAYERS: Player[] = [
  new Player("Maxwell", "503-753-6453", "maxwell.josef@gmail.com", ["EDH", "Standard"], "Expert", true, "https://pbs.twimg.com/profile_images/783092427951255552/XRFynPYe_400x400.jpg", "Portland, OR"),
  new Player("Leo", "916-555-5555", "leogarcia@gmail.com", ["EDH", "Modern"], "Intermediate", true, "http://style.anu.edu.au/_anu/4/images/placeholders/person.png", "Sacramento, CA"),
  new Player("Jace", "555-555-5555", "jace@magic.com", ["EDH", "Modern", "Standard"], "Beginner", false, "http://www.artofmtg.com/wp-content/uploads/2016/01/Oath-of-Jace-MtG-Art-Oath-of-the-Gatewatch-.jpg", "Ravnica, NY"),
];
