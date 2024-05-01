# #1 - TVRD ('Turd') Stack

## My personal favourite frameworks I use when making websites/apps

<br>

Firstly I'll start off and say I am nowhere near important enough to voice my opinions on OTHER peoples stacks, personally as long as it works and is scalable... who cares right? These are just my own opinions on what gives me the most enjoyment and the fastest results.
<br><br>

I use a stack I call TVRD (Turd) which is genuinely as basic as I think it gets tbh:
<br><br>

- T: Tailwind,
- V: Vite,
- R: React,
- D: DaisyUI
  <br><br>

### Now let me explain my choices,

<br>

- **TailwindCSS**: I use Tailwind because personally, I mean who cares about inline styles REALLY?, the inconvinience of swapping files already outweighs the inconvinience of reading through HTML with Inline Styles. Plus Tailwind really is just less code overall realistically.. Writing over classnames and such and then also not having Tailwinds shorthands (eg. px-[x]/py-[x] for padding x and y and such) already adds a surprising amount of code written. Not to mention the amount of support for Tailwind is ever growing. All's im saying is, It's pure magic and I love it.
  <br><br>

- **Vite**: I use Vite because holy crap you never realise how many times you spam <kbd className="kbd kbd-sm">Ctrl</kbd> + <kbd className="kbd kbd-sm">R</kbd> refreshing until AFTER you try fast reload, and also because it's just 50x better than <kbd className="kbd kbd-sm">create-react-app</kbd>... Not much to say about this one to be honest, I just like the snappy-ness of it.

<br><br>

_**Heres where it gets controversial**_

- **React 😟**: Now now... React is just one of those things where you have the vast majority loving it (And I'm not completely stupid, for most its a love _**hate**_ relationship) but god... React is just so easy to dive into. For someone who was using plain HTML and JS, It's a lifesaver honestly, and state isn't even my favourite feature! It's the ability to easily define a component ONCE, and reference it anywhere I want. It's beautiful honestly. But of course.. It has its.. Ugly side. So many errors for improper state definitions. On a recent project of mine I was developing a custom CSS feature so users could customise it however they see fit, and for this I needed a custom ID for every single element. My first idea was to manually go through and add descriptive ID's, and then I remembered in the react.dev docs there's a hook for generating custom ID's! Perfect! So I add it to my script... and immediately the whole thing breaks because I cant set state inside of useEffect... but I cant access every element without useEffect to wait until after loading? So instead I spent 3 hours labeling every single element. Thats another one too, useEffect is one of the most confusing things ive ever had to explain to someone. Genuinely the syntax is so hard to explain to someone. But apart from the glaring issues, it's still my baby and I love it.
  <br><br>

- **DaisyUI**: Heres a pretty safe one! DaisyUI if you dont know, is a UI library for TailwindCSS. And if you dont know what that is, basically its a very safe option for making good looking and feeling UI's, and they give you premade components that are compatable with TailwindCSS! For example: <kbd className="kbd kbd-xs">btn</kbd> just gives you a pre-animated button with a theme applied already and all colours already set up! And by comparison a button made in Plain Tailwind CSS would be like this: <kbd className="kbd kbd-sm">px-4 py-3 bg-zinc-700 hover:bg-zinc-800 border-1 border-white</kbd> etc. etc. (That was genuinely so hard to write because I havent wrote components in TailwindCSS for about a year... It's that good). DaisyUI also has a theme system, so you can write your own themes (or use theirs) and use a package made by the same guy who made DaisyUI to switch between them easily!

<br>

## Well that kinda covers it all, other than the honourable mentions:

- Electron: My best friend and worst enemy depending on whether I'm using IPC or not!
- Next.JS: Honesly I just don't have enough experience with it but honestly, used it once and it was insane.
- Figma: I know most people don't consider design tools apart of their stacks but jesus christ I use it was too much for mocking ideas together and getting a feel for how things are gonna look.
