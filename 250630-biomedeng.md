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

I am currently working as a child and adolescent psychiatrist. We have many tools and achieve good outcomes when the patient is **verbal**.  
For **non‑verbal** patients, effective options are strictly limited.

<!-- [Tager‑Flusberg & Kasari 2013] -->

---
layout: default
---

::title::

## Biomedical engineering

::content::

Nature inspires engineering. By observing our patients’ needs we can design new, patient‑driven solutions.  
Autism research is relatively young, leaving plenty of space for biomedical innovation.

---
layout: default
---

::title::

## Informatics

::content::

Current machine‑learning techniques are powerful yet resource‑hungry and often opaque.  
We propose exploring **entropy‑constrained** learning algorithms — lightweight, transparent, deployable on edge devices.

<!-- [Xiang et al. 2023 – entropy‑bounded RL in robotics] -->

---
layout: default
transition: slide-down
---

::title::

## Medicine, psychiatry & psychology

::content::

Non‑verbal autistic behaviour is unique.  
- Limited abstract reasoning → heavy reliance on memorising & replaying patterns.  
- A strong drive to minimise sensory **uncertainty** and **surprise**.

<!-- [van de Cruys 2014], [Friston 2010] -->

---
layout: section
image: https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

::title::

# Autism: preliminary

---
layout: default
---

::title::

## Psychiatry solves many problems…

::content::

- Irritability can be mitigated with atypical antipsychotics.  
- Talk therapy benefits verbal autistic patients.  
- Core phenomena: insistence on sameness, rituals, stereotypies, *meltdowns*.

<!-- [Lord et al. 2020 – core ASD features] -->

---
layout: default
---

::title::

## …but raises many questions

::content::

- ≈ 1⁄3 of autistic individuals are minimally verbal.  
- Diagnostics and therapy in psychiatry are built around **language**.  
- How do we reach those who cannot easily speak?

<!-- [Tager‑Flusberg & Kasari 2013] -->

---
layout: default
---

::title::

## Looking for a new way

::content::

Non‑linguistic approaches exist (neuro‑stimulation, VR training), yet they still require feedback loops often mediated by speech.  
We need a framework that works **without** verbal interaction.

---
layout: default
transition: slide-down
---

::title::

## First: do no harm

::content::

- Child development windows are narrow.  
- Non‑verbal children cannot articulate distress.  
- Ethical research demands **low‑risk, high‑information** methods.

---
layout: section
image: https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

::title::

# Entropy restrictions in biology

---
layout: default
---

::title::

## Living‑cell thermodynamics

::content::

Cells require an **ordered** interior; they export excess energy to keep internal entropy low.  
Chemical reactions trend toward minimum Gibbs free energy.

<!-- [Alberts “Molecular Biology of the Cell”], [Schrödinger 1944] -->

---
layout: image
title: Image
level: 2
image: https://www.researchgate.net/profile/Liliana-Grajcarova/publication/318529364/figure/fig2/AS:631678389207072@1527615272824/D-representation-of-the-Gibbs-free-energy-surface-Metastable-and-stable-phases-are.png
---

::content::

3-D Gibbs free-energy landscape showing a system rolling from higher-energy metastable states into a deep stable minimum.	

---
layout: image
title: Image
level: 2
image: https://www.researchgate.net/profile/Alexander-Schreiber-3/publication/226018588/figure/fig3/AS:319960988569608@1453296052377/Cells-maintain-a-relatively-higher-degree-of-order-compared-with-their-environment-by.png
---

::content::

Cell diagram: nutrients (green arrow) supply free energy in, heat/waste (red arrow) exports entropy out to keep the cytoplasm ordered.	

---
layout: default
---

::title::

## Proteins as agents

::content::

Proteins act like simple agents:  
- Pre‑configured by folding.  
- Perform specific low‑entropy tasks (enzyme catalysis).  
- Sensitive to environmental disorder.

---
layout: default
---

::title::

## Information‑theoretic cell

::content::

A cell stores and uses only **necessary** information.  
Example: the lac operon activates **only** in lactose‑rich media — internal state mirrors external demand.

<!-- [Jacob & Monod 1961] -->

---
layout: image
image: https://microbenotes.com/wp-content/uploads/2018/09/Inducers-and-the-Induction-of-Lac-Operon.jpg
level: 2
title: Image
---

::content::

Classic lac-operon schematic — lactose binds the repressor, lifting the “OFF” block so lacZYA genes switch “ON.”	

---
layout: default
transition: slide-down
---

::title::

## Homeostatic prediction

::content::

Organisms reduce uncertainty either by  
- **Updating models** (learning) or  
- **Acting** to make the world predictable.  

Both routes aim to maximise mutual information with the environment.

<!-- [Friston 2010] -->

---
layout: section
image: https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

::title::

# Free Energy Principle in psychiatry

---
layout: default
---

::title::

## An optimising brain

::content::

The brain continuously compares predictions with sensations.  
Learning must be **fast enough** to cut uncertainty, but **slow enough** to stay stable.  
Result: an ongoing free‑energy minimisation process.

<!-- [Friston 2010], [Clark 2013] -->

---
image: https://www.researchgate.net/profile/Sarah-Schwoebel/publication/326025452/figure/fig1/AS:11431281307923695@1738720687059/The-environment-and-the-active-inference-agent-The-time-evolution-of-the-environment-is.gif
layout: image
level: 2
title: Image
---

::content::

Active-inference loop: an agent acts on the environment, senses outcomes, and updates beliefs to minimize prediction error.	

---
layout: default
---

::title::

## Karl friston’s framework

::content::

Free‑Energy Principle (FEP): minimise surprise by compressing internal representations and acting to fulfil predictions.  
FEP offers a unifying account of perception, action, and learning.

---
layout: default
---

::title::

## Schizophrenia example

::content::

Evidence suggests mis‑weighted prediction errors in schizophrenia:  
- Excess sensory precision → hallucinations.  
- Shallow contextual priors → delusions.

<!-- [Sterzer et al. 2018] -->

---
layout: image
title: Image
level: 2
image: https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41537-022-00247-7/MediaObjects/41537_2022_247_Fig1_HTML.png?as=webp
---

::content::

Energy-surface comparison: deep contextual valley for controls vs. flattened landscape in schizophrenia (easier belief switching).	

---
layout: default
---

::title::

## Extending to autism

::content::

FEP is being explored for autism, depression, anxiety…  
Simulations allow **in‑silico** testing before clinical translation.

---
layout: image
image: https://www.frontiersin.org/files/Articles/40641/fpsyg-04-00019-HTML/image_m/fpsyg-04-00019-g001.jpg
title: Image
level: 2
transition: slide-down
---

::content::

Three-layer predictive-coding stack: feed-forward prediction errors (⊕) and feedback predictions (⊖) plus a surprise burst at mismatch.	

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

## Language in practice

::content::

Clinical interviews and talk therapies depend on language.  
Every therapeutic dialogue is an **algorithm** encoded in words.

---
layout: default
---

::title::

## Challenge in non‑verbal autism

::content::

Without language, standard assessment and therapy break down.  
We rely on indirect methods (visual schedules, stimulation, meds) with mixed success.

---
layout: default
---

::title::

## Behaviour simulation

::content::

VR offers a safe, accelerated sandbox.  
Entropy‑constrained agents can rehearse scenarios without risking patient distress.

---
layout: default
---

::title::

## Toward assistive robotics

::content::

In the long term, robots trained under entropy constraints could deliver predictable, low‑surprise care — valuable for both autistic individuals and an aging society.

---
layout: full
image: https://developer-blogs.nvidia.com/wp-content/uploads/2025/03/nvidia-isaac-gr00t-n1-featured.gif
contentClass: text-white
transition: slide-down
---

::content::

## Nvidia GR00T

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

## Goal

::content::

To prove that Friston's Free Energy Principle can be successfully applied to simulate an autistic person in a virtual environment.

---
layout: default
---

::title::

## Preparations

::content::

1. Secure bioethics approval.  
2. Finalise study branding & protocols.  
3. Plan recruitment across public & private clinics.

---
layout: default
---

::title::

## Gathering clinical data

::content::

1. Baseline psychiatric evaluations.  
2. Select eligible non‑verbal patients.  
3. Collect:  
   - Caregiver reports (natural language),  
   - Video recordings of daily behaviour.

---
layout: default
---

::title::

## Mixing real & simulated cases

::content::

1. Map real footage to VR avatars.  
2. Generate simulated behaviours via entropy‑constrained algorithms.  
3. Blind‑test clinicians: **real vs. simulated?**  
4. Iterate until indistinguishable.

---
layout: full
image: https://docs.nvidia.com/ace/animation-pipeline/1.1/_images/animation_pipeline_demo.gif
contentClass: text-white
---

::content::

## Text2Animation

---
layout: full
image: https://developer-blogs.nvidia.com/wp-content/uploads/2021/12/image3.gif
contentClass: text-white
---

::content::

## Motion capture

---
layout: default
transition: slide-down
---

::title::

## Evaluation

::content::

1. Identify best‑performing algorithms.  
2. Quantify realism & clinical utility.  
3. Publish methodology; outline next translation steps.

---
layout: section
image: https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

::title::

# ANNSIM 2025 presentation

---
layout: default
---

::title::

## First time at ANNSIM :)

::content::

Our early concept proposes classic deep reinforcement learning.  
We now hypothesise that **entropy‑constrained learning** will:  
- Better reflect ASD sensory priorities,  
- Use less computational power,  
- Improve behavioural fidelity.

<!-- Mention ANNSIM 2025 paper (Mukrecki 2025) -->

---
layout: end
image: https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

::content::

# Thank you

Special thanks to potential supervisors:  

- **Małgorzata Kasprowicz, DSc, PhD, Eng**  
- **Joanna Rymaszewska, DSc, PhD, MD**  
- **Przemysław Śliwiński, DSc, PhD, Eng**

