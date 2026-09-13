# DevStack

A React + TypeScript web app for browsing developer technologies and building
your own personal "stack" from them.

## Description

DevStack lets you explore 15 tools across categories like Frontend, Backend,
then add the ones you want into a running "Your Stack"
sidebar you can edit as you go.

## Tech Used

React 19, TypeScript, Vite, Tailwind CSS + DaisyUI, React-Toastify, React Icons

## Features

- Browse technology cards with ratings, difficulty, and category tags
- Build a personal stack, with duplicate protection and one-click remove
- Fully responsive layout with a working mobile navigation menu

## React Q&A

**What is JSX, and why is it used in React?**
Honestly JSX just looks like HTML but it's actually JavaScript in disguise. Under the hood every `<Card {...tech} />` line gets turned into a `React.createElement()` call, but nobody wants to write that by hand for a whole page of components. JSX just makes it readable — I can look at my `Explore.tsx` and actually picture the layout instead of parsing a pile of function calls.

**What is the difference between props and state?**
Props are things handed down to a component — read-only, can't touch them from inside. State is something the component owns and can actually change on its own. Took me a minute to stop mixing these up, but the way I think about it now: `Card` gets its `name` and `icon` as props because `Explore` decides that stuff. But `stack` in `Explore` is state, because `Explore` itself is the one deciding what's in it and when it changes.

**What does the useState hook do, and where did you use it in this project?**
It gives a component a value that persists between renders and, when you update it, triggers a re-render so the UI catches up. My main use of it is `const [stack, setStack] = useState([])` in `Explore.tsx` — that array is literally the whole "Your Stack" feature. Every add or remove just calls `setStack` and the sidebar reacts on its own, no manual DOM updates or anything.

**What does the useEffect hook do, and why did you need it to load the JSON data?**
So useEffect is the normal way to do this — you fetch inside it, then dump the result into a useState variable once it comes back. That's what most people reach for when loading JSON.

I didn't actually go that route though. I used `use()` with `Suspense` instead, which is newer and honestly a little less code to manage. `fetchData()` over in `App.tsx` just returns a promise, and `Explore.tsx` calls `use(fetchdata)` straight on it — no useEffect, no separate loading state variable to juggle. React just pauses on `Explore` until the promise resolves, and the `Suspense` fallback shows "Loading technologies..." while that's happening. Functionally it does the same job as useEffect + useState would, I just didn't have to wire up the loading flag by hand.

**Why does every item in a .map() list need a unique key prop?**
React needs some way to tell "this card" apart from "that card" when the list changes, otherwise it just guesses based on position and things get weird — wrong item disappearing, state jumping to the wrong card, that kind of mess. Since every technology in `Data.json` already has its own `id`, I just used that as the key instead of the array index, which is the safer move anyway since indexes shift around when you add or remove stuff.

**What is conditional rendering? Show one place you used it.**
It's just rendering different JSX depending on some condition instead of always showing the same thing. Nothing fancy. In `CardSelect.tsx` I check `stack.length === 0` — if the stack's empty it shows that "Your stack is empty" placeholder, otherwise it swaps to the actual list of added items.

**How do you pass data from a parent to a child, and how does a child send something back to the parent?**
Parent → child is straightforward props, like `Explore` handing each tech object down into `Card`. The reverse direction is the part that confused me at first: a child can't just "send data up," it has to call a function the parent gave it. So `Explore` passes `handleAdd` down into `Card` as `onAdd`, and clicking the button just runs `onAdd(item)` — which is really `handleAdd` running back in `Explore`, updating `stack` from there. The child never touches the parent's state directly, it just triggers it.
