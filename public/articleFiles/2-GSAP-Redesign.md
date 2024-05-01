# #2 - Making a 'modern' website with _*GSAP_*

## New juaneth.dev redesign with GSAP animations

<br>

So I'm sure you've noticed there has been a major redesign to the website! First time I've ever put real effort into making a portfolio website ish.
<br><br>
Before I tried a more retro-futuristic type of grids/pixel art look, but now I've gone very modernist and I'd love to share some of the lessons I've learnt along the way (being honest; not a lot of lessons were learnt)
<br><br>
### - Font Choice -
Font choice is not something i've put a LOT of thought into, especially readability and overall feel. Everytime I'd visit Google Fonts I would pick the first display font I saw that I thought looked cool and went with it. Either extremely wide fonts, extremely unreadable fonts, or a mixture of weird design choices that I would never check actually fit appropriately in _*Context*_.
<br><br>
Now I've gone with something easily readable in a modernist style HUGE font, and realised that maybe these fancy-pants, ultra-slow, huge-js-bundle, artsy websites might have the right idea with fonts.
<br><br>
### - Design -
I was sick of my portfolio website being something that I'd just shove my projects onto and forget about and maybe once in a while send it to the odd person asking about a job; So I decided I needed something I was genuinely proud of and could show off to people that would stand out against a lot of static-site templates that some other devs use.
<br><br>
I first landed on a tabbed website that looked like a browser and you could switch tabs to check out other projects or use "hyperlinks" that could show more content; And then realised quickly that employers wouldn't spend the 5 minutes navigating through "hyperlinks" and tabs just to find contact information.
<br><br>
Then after brainstorming I thought about maybe just an extremely clean, bare-bones site with my contact info and a small amount of previous work but then realised that it doesn't have any wow to it and is exactly what I didn't want.
<br><br>
So I didnt want something complex but I also didn't want anything simple; A controdiction on its own.
So I had to settle for something with a bit of wow but was simple enough that it only took 10 seconds to find contact information/hiring info. (I am desperate for money)
<br><br>
Finally after 2 bad ideas, I came up with a solution: A straight line. I would have content in screen sized chunks with minimal information other than what is absolutely needed. So first I started off picking what I absolutely needed and in what order would be most important:
<br><br>
1 - Home page to show my name, and what I do
<br>
2 - My projects/previous work
<br>
3 - These articles
<br>
4 - Hiring information
<br>
5 - Socials
<br><br>
Then after deciding my order I needed a simple background that stuck to a simple gray and white colour scheme; and after 5 minutes of messing about in Figma I had an SVG that I thought was unassuming enough but was intresting enough to the eye.
<br> <br>
After that of course was layouts. I took the idea of interactivity from my browser idea and decided about a game menu like interface, where each item is listed one after the other and has equal importance. Eventually the keyboard control idea got scrapped but the idea of listing each item equally stayed.
<br><br>
Finally after that whole process my design was finished in 1 night and I was ready to start working on the actual implementation.
<br><br>
### - GSAP -
GSAP (Green Sock Animation Platform) is basically what its called on the tin; an animation platform. It allows you to run animations without the ball-ache of managing CSS inside JS. I decided to use it for the scrolling so that my screen-sized chunks would snap into place nicely when they came into view. And this is where I was completely stuch for a few days.
<br><br>
Completely not GSAP's fault, but I was struggling wrapping my head around `useGSAP()` and all the other stuff like `scrollTrigger` and `.fromTo()`. Until I found an [amazing resource on the GSAP Forums](https://gsap.com/community/forums/topic/24423-how-to-snap-instantly-on-slight-scroll/) that helped me get past the first hurdle of making this work.
<br><br>
After I sorted the snapping scroll I started work on the projects page and added a nice arrow animation on hover that really helps you see whats selected and adds a nice level of interactivity. I originally planned the project pages to be completely seperate and use reactRouter to show a new page... but got a brand new idea that would completely fuck me over later on <3. What if the pages were just slid into view and I placed them horizontally next to the project page? And with minimal thought just went straight to making it.
<br><br>
Theres 3 problems with this approach:
<br><br>
A - Have to add horizontal snapping

B - Managing horizontal and vertical snapping on the same page

C - Managing vertical scrolling normally without snapping (which did not get fixed as of writing)

<br>
And after that entire process of debugging and rewriting I got to another issue: Links.
<br><br>
How on earth was I going to make it so someone could go to https://juaneth.dev/unissh ?!
<br><br>
Now this whole other fix involved reactRouter, managing ID's, many failed attempts to find a better solutution; all of which I cant be arsed to write about. But the summary is that it was complicated and I dont even wanna remember it. Miraculously one night after working on it and waking up, I found it had just... fixed? Not even I understand that miracle.
<br><br>
Then after all that it was pretty much smooth sailing other than navigating a mess of a codebase with `useGSAP()` splattered everywhere.
<br><br>
I added a hover animation to the articles that shows a description and date whilst moving all the other items out of the way, then added content to the Hiring page, then finished it off with my "Socials" page that ended up more like a conclusion page. Boom! It's finally done.
<br><br>

### - In Conclusion -
I built this website using React, Tailwind CSS, DaisyUI, Vite and a new addition to my favourite stack ([which you can read more about here](../article/1-TVRD)) GSAP! I would try Framer Motion in the future as a better alternative, but for now GSAP is my favourite animation library.
<br><br>
Sometime soon I'll use Framer Motion in Avon for the widgeting system so I'll probably write an article about that also!
<br><br>
## Thank you for reading!
