---
layout: cover
title: "Entropy‑constrained learning algorithms for non‑verbal autism"
theme: ./theme
author: Dominik Mukrecki, MD
transition: slide-up
download: false
image: https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

---
layout: default
---

::title::

## Motivation

::content::

currently working as a children and adolestent's psychiatrist

we have many tools and can achieve some success if patient uses langage - is verbal

for non-verbals options are strictly limited

---
layout: default
---

::title::

## Biomedical enginering

::content::

nature offers inspiration for enginering

we can learn from or patients and develop new solutions driven by the need for help and care

autism is fairly new, so we can have many work to do

---
layout: default
---

::title::

## Informatics

::content::

machine learning offers some algorithms, buth they are currently applied almost everythere, while beeing limited

we can offer new look for this trying to find new type of alhorithms (not typical ML ones), working in entropy constrained env

it could offer also low energy and compute demand, so can be applied on the edge

---
layout: default
---

::title::

## Medicine, psychiatry and psychology

::content::

behavior of non-verbal autistic individual is special case

we assume lack of abstract reasoining in them

they can learn only by memorising and recalling

also they have to control uncertainty of possible sensory input and surprise after stimulus receive

---
layout: section
image: https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

::title::

# Autism preliminary

---
layout: default
---

::title::

## Psychiatry solves many problems...

::content::

we can mitigate autistic irratability by using particular medications

we can also improve outcome in verbal autistic people using spoken therapies

there are certain autistic phenomenons described - like insisitince on sameness, rituals and repetitive behaviors, tantrums, *meltdowns*

---
layout: default
---

::title::

## ...but also gives many questions

::content::

roughtly 1/3 of autistic individuals are minimally verbal or non-verbal

almost whole psychiatry and psychology is built on top of natural language, both for intevention and diagnostic

---
layout: default
---

::title::

## Looking for a new way

::content::

there are some solutions like stimulation techniques: tms, tdcs, vagus and trigeminal nerve stimulation and even dbs

also some vrs games and so

but again - we need feedback and interaction in natural language

---
layout: default
---

::title::

## First: do not harm

::content::

to test new therapies we need compiance and safety assurance

also we have very narrow time window - children's developmental period

experiments on children not using verbal feedback raise ethical concerns

---
layout: section
image: https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

::title::

# Entropy restrictions in biological systems

---
layout: default
---

::title::

## Living cell thermodynamics

::content::

living organism is built from cells

cell to work needs ordered and compartmentalized environment (cell membranes provide this)

so we can assume from thermodynamical point of view cell have to minimize entropy inside

also due to ongoing chemical reactions gibbs free energy also should be minimized

excess of energy has to be transferred outside to maintain low entropy

---
layout: default
---

::title::

## Proteins as agents

::content::

proteins work as simple agents - they perform particular task (enzymes)

to do so they need to have lowest entropy possible in the environment - because adding novelty could break protein, compete with substrate, lower product synthesis etc.

they are also pretrained by protein folding - to have predefined shape, to join with particular substrate etc

---
layout: default
---

::title::

## Cell described using information theory

::content::

cell have to handle only necessary amount of information inside

ideally - this information should reflect outside environment - for example in lactose rich environment cell should produce lactase enzyme, where lactose fits well

---
layout: default
---

::title::

## Homeostic adaptation through predicttion

::content::

to handle homeostasis cell and environment should have the highest mutual information possible

reducing uncertainity before interaction could be achieved by increasing possible outcomes inside cell (multicellular organisms can handle this better without violation of internal entropy constraint inside cell) = learning

reducing surprise after interaction with environment could be done by taking certain actions based on internal systems

---
layout: section
image: https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

::title::

# Free energy principle in psychiatry

::content::

we can present human brain as an adaptive agent - it has to constantly compare it internal (aquired or congenital) states with sensory inputs

adaptation could be achieved by learning constrained by *computational power* - we cannot learn too fast, but we have to reduce uncertainity

we can not also learn too slow - because too much surprise could put us into unpreditable state - anxiety, anger etc.

this way we can perceive above as a typical optimization task

---
layout: default
---

::title::

## Karl Friston's work

::content::

Fristons *free energy principle* and other derivative patterns looks to provide theoretical framework for the most basic psychology and psychiatry concern - how human mind works

optimization during perception and learning could be done by compressing the information inside brain, but leaving the most relevant ones - this way we minimize entropy and lower Friston's free energy

---
layout: default
---

::title::

## Abnormalities in schizophrenia

::content::

there are works suggesting issues with minimizing free energy in schizophrenic patients - their cognitive contexts seem to be more shallow than in healthy control, so they can easier switch between beliefs, leading to delusions

internal uncertainity could interfere with perception, leading to hallucinations

---
layout: default
---

::title::

## Possible extensions

::content::

framework could be used to unify other mental conditions theories, for example depression and also autism

modern computational techiques offers options to simulate and test these concepts inside virtual environment

---
layout: section
image: https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

::title::

# Therapies as algorithms

---
layout: default
---

::title::

## Natural language in diagnostics and therapy

::content::

as we mentioned before, psychiatry and psychology uses natural language

as a psychiatrist i use it to collect and describe current mental state of the patient

i also ask therapiest to influence patient by natural language during spoken therapy

each task can be broken down to sort of algorithm, but we need natural language processing ability to execute it

---
layout: default
---

::title::

## Difficulties in non-verbal cases

::content::

non verbal patients are unable to execute natural lanugage tasks properly and efficiently

this is why we cannot examine them well; spoken therapies are often ineffcient

to mitigate this we try proxy methods, like occupational therapy, behavioral influences, stimulation techniques, psychotropic medications

---
layout: default
---

::title::

## Simulations of behavior

::content::

because we have theorethical framework (free energy principle) - alerady well described and proven in specific casess, we can extend it further

simulation in vr could provide ability to extend timespan (accelerated by compute) and **reducing possible harm** for real patients

---
layout: default
---

::title::

## Future extension to robotics

::content::

If iterations of proposed research will be promising, we could try to incporporate developed framework into robotics

care of dependent person is demanding and also we should expect higher amount of labour caused by aging population

training future robotic agents using autistic traits could help them predict unwanted outcomes and provide optimized care

---
layout: section
image: https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

::title::

# PhD working schedule

---
layout: default
---

::title::

## Preparations

::content::

bioethical comission approval

crafting visual and conceptual identification of trial

strategy for patient's recruitment

---
layout: default
---

::title::

## Gathering clinical data

::content::

first i provide typical psychiatric evaluation

then patients will be selected

then we collect feedback of children's behavior - natural language description AND video footage

---
layout: default
---

::title::

## Mixing real and simulated cases

::content::

we map real cases into virtual enviromnent

then inside this enviromnent we try also to simulate behaviors

then we show professionals (psychologists, psychiatrists etc) recreated footages in the VR

iterate until they cannot distinguish between real and simulated case

---
layout: default
---

::title::

## Evaluation

::content::

identification of working alhorithms and fine tuning them

analyze and formalize results

---
layout: section
image: https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

::title::

# ANNSIM presentation

---
layout: default
---

::title::

## First time at ANNSIM :)

::content::

previous concept presented at the ANNSIM PhD Colloqium was driven by classic reinforcement learning algorithms (deep learnign)

wy hypothesize it could be somehow usable, but enforcing entropy constraints in the novel type of alhorithms could fit better specific case like ASD

---
layout: end
image: https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

::content::

# Thank you

Special thanks to potential supervisors:

**Małgorzata Kasprowicz, DSc, PhD, Eng**

**Jolanta Rymaszewska, DSc, PhD, MD**

**Przemysław Śliwiński, DSc, PhD, Eng**