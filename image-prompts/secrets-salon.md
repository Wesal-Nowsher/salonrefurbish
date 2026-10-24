# Secrets Beauty Salon: image prompts for ChatGPT

17 images. Generate each one, then save it as `.webp` with the exact file name shown, in `public/images/secrets-salon/`.

## One-shot option: all images in one go, delivered as a ZIP

Paste everything from "START" to "END" into ChatGPT as one message. If it stops partway (ChatGPT often makes a few images per reply), just reply "continue" until all 17 are done, then "now make the ZIP".

```
START

You are producing a set of 17 photographs for a luxury beauty salon website. Work through the list below in order and generate every image. Do not skip any, do not combine images, do not ask me questions. If you run out of room in a reply, stop after a finished image and wait for me to say "continue".

HOUSE STYLE FOR EVERY IMAGE:
Ultra-realistic editorial beauty photograph, indistinguishable from a real photo shot on a full-frame camera (Canon EOS R5, 85mm f/1.8 or 100mm macro lens), natural window light with soft shadows, shallow depth of field, subtle film grain. Real skin texture with visible pores, fine lines and tiny imperfections; natural cuticles and nail edges; no airbrushing, no plastic or waxy look, no CGI, no illustration. Palette: warm porcelain white, soft blush pink, muted antique gold, charcoal grey. Calm, luxurious, private boutique atmosphere. No text, no logos, no brand names, no watermarks. Anatomically correct hands with exactly five fingers.

WHEN ALL 17 ARE DONE:
Use Python to convert each image to WebP (quality 82) at the size given, centre-cropped to the exact aspect ratio, named exactly as listed (except og.jpg, which stays JPG). Put them all in one folder named secrets-salon, zip it as secrets-salon-images.zip and give me the download link.

IMAGES (file name | size | description):

1. hero.webp | 1200x1500 (4:5) | Close-up of a woman's elegant hand resting on a cream linen cloth beside a single pale pink garden rose, short almond nails in glossy sheer blush-pink gel with one thin antique-gold accent line, soft morning window light from the left, a delicate thin gold ring, porcelain-white background softly out of focus.
2. nails.webp | 900x1200 (3:4) | Macro of two hands with medium almond nails, nude base with hand-painted gold foil flakes and tiny white daisies, glossy gel finish, fingertips on white marble with a few blush rose petals.
3. lashes.webp | 900x1500 (3:5) | Extreme close-up of a woman with eyes gently closed, naturally lifted and tinted lashes after a lash lift, softly laminated brows, minimal makeup, blush background blur.
4. t-laser-hair-removal.webp | 1000x1250 (4:5) | Therapist in a charcoal tunic and nitrile gloves performing diode laser hair removal on a client's lower leg, client relaxed on a treatment bed with white linen, sleek white unbranded handpiece, bright calm modern room, blush towel nearby.
5. t-nails.webp | 1000x1250 (4:5) | Over-the-shoulder view of a nail technician applying glossy gel polish to a client's hand at a white manicure desk, row of polish bottles in nude, blush, burgundy and gold, small brass lamp.
6. t-lashes-and-brows.webp | 1000x1250 (4:5) | Lash technician performing a lash lift on a client lying on a treatment bed, eyes closed, cream headband, gloved hands with a fine applicator, warm diffused light.
7. t-facials-and-skin.webp | 1000x1250 (4:5) | Woman with clear, slightly dewy skin receiving a facial, eyes closed, hair in a white towel, gloved therapist holding a small unbranded white device near her cheek, faint freckles.
8. t-tattoo-removal.webp | 1000x1250 (4:5) | Close-up of a woman's inner forearm with a small partially faded fine-line black tattoo, skin slightly pink, gloved therapist's hand nearby, clean white treatment room.
9. t-thread-veins-and-skin-tags.webp | 1000x1250 (4:5) | Woman's face in soft profile while a gloved therapist holds a slim unbranded pen-shaped precision device near her cheek, natural skin with subtle redness.
10. t-waxing.webp | 1000x1250 (4:5) | Still life of a waxing station: warmer of golden-amber wax, wooden spatulas in a glass jar, folded white towels, eucalyptus sprig, on a blush pink trolley.
11. t-makeup.webp | 1000x1250 (4:5) | Makeup artist applying soft-glam makeup to a smiling woman in her early thirties in a salon chair, rosy lips, champagne eyeshadow, warm mirror bulbs blurred behind.
12. gram-1.webp | 800x800 (1:1) | Overhead: hand with short square glossy French tips with a thin gold line, holding a cappuccino in a white cup on marble.
13. gram-2.webp | 800x800 (1:1) | Almond nails in a mismatched pastel set (lilac, mint, butter yellow, blush, baby blue), hand on a soft pink knit sweater.
14. gram-3.webp | 800x800 (1:1) | Macro of glossy pearl chrome nails catching window light, fingers curled against cream silk.
15. gram-4.webp | 800x800 (1:1) | Close-up of one open eye after a lash lift and tint, curled defined lashes, laminated brow, natural skin.
16. gram-5.webp | 800x800 (1:1) | Burgundy glossy almond gel nails, hand holding a small bouquet of blush peonies, warm light.
17. og.jpg | 1200x630 (1.91:1) | Still life of blush peonies, a blank gold-rimmed appointment card and a small bottle of nude polish on porcelain marble, large empty space on the left.

END
```

When you have the ZIP, unzip it and copy the files into `public/images/secrets-salon/` (or send the ZIP to Claude to add them).

---

## One at a time (best quality)

### How to get realistic results

1. **Paste the house style first.** At the start of a new ChatGPT chat, paste the "House style" block below once and say: "Use this style for every image I ask for in this chat."
2. **One image per message.** Paste a single prompt, then the next one in a new message.
3. **Set the shape.** Every prompt states its aspect ratio; ChatGPT follows it.
4. **If it looks fake** (waxy skin, too-perfect nails, extra fingers), reply: "Make it more photographic: real skin texture with pores and fine lines, natural imperfections, less smoothing, true-to-life colour, no glow." Regenerate until hands have five normal fingers.
5. **Saving:** download, convert to WebP (for example at squoosh.app, quality 80) and rename exactly as listed.

---

## House style (paste once at the start)

> Ultra-realistic editorial beauty photograph, indistinguishable from a real photo shot on a full-frame camera (Canon EOS R5, 85mm f/1.8 or 100mm macro lens), natural window light with soft shadows, shallow depth of field, subtle film grain. Real skin texture with visible pores, fine lines and tiny imperfections; natural cuticles and nail edges; no airbrushing, no plastic or waxy look, no CGI, no illustration. Colour palette: warm porcelain white, soft blush pink, muted antique gold, charcoal grey. Calm, luxurious, private boutique atmosphere. No text, no logos, no brand names, no watermarks. Anatomically correct hands with five fingers.

---

## Home page

### 1. `hero.webp` (4:5 portrait, about 1200x1500)
> Close-up of a woman's elegant hand resting on a cream linen cloth beside a single pale pink garden rose, short almond nails in glossy sheer blush-pink gel with one thin antique-gold accent line, soft morning window light from the left, gentle shadows, real skin texture on the knuckles, a delicate thin gold ring, porcelain-white background softly out of focus. Luxury beauty editorial photograph, 4:5 portrait.

### 2. `nails.webp` (3:4 portrait, about 900x1200)
> Macro photograph of two hands with medium almond nails, nude base with hand-painted gold foil flakes and tiny white five-petal daisies, glossy gel finish catching soft light, fingertips resting on a white marble table with a few scattered blush rose petals, visible natural cuticles and fine skin creases, shallow depth of field. 3:4 portrait.

### 3. `lashes.webp` (3:5 tall portrait, about 900x1500)
> Extreme close-up beauty portrait of a woman with eyes gently closed, naturally lifted and curled dark lashes after a lash lift and tint, softly laminated brushed-up brows, minimal makeup, visible skin pores and fine eyelid texture, warm soft daylight, blush-toned background blur. Tall 3:5 portrait.

---

## Treatment pages (all 4:5 portrait, about 1000x1250)

### 4. `t-laser-hair-removal.webp`
> A beauty therapist in a charcoal-grey tunic and nitrile gloves performing diode laser hair removal on a client's lower leg; the client lies relaxed on a treatment bed with crisp white linen. The handpiece is sleek, white and generic with no branding. Bright, calm, modern treatment room with soft daylight, a blush pink towel folded nearby. Realistic, reassuring, clinical yet luxurious. 4:5 portrait.

### 5. `t-nails.webp`
> Over-the-shoulder view of a nail technician applying glossy gel polish with a fine brush to a client's hand at a clean white manicure desk, a neat row of polish bottles in nude, blush, burgundy and gold tones, small brass desk lamp, softly blurred salon interior behind. Real hands with natural detail. 4:5 portrait.

### 6. `t-lashes-and-brows.webp`
> A lash technician carefully performing a lash lift on a client lying on a treatment bed, eyes closed, soft cream headband, the technician's gloved hands holding a fine applicator, warm diffused light, pale pink and white room, intimate and calm. 4:5 portrait.

### 7. `t-facials-and-skin.webp`
> A woman with clear, healthy, slightly dewy skin receiving a professional facial, eyes closed, hair wrapped in a white towel, the therapist's gloved hands holding a small generic white device near her cheek, real skin texture with pores and faint freckles, soft daylight, blush and porcelain tones. 4:5 portrait.

### 8. `t-tattoo-removal.webp`
> Close-up of a woman's inner forearm with a small fine-line black tattoo that is partially faded, the skin slightly pink, a gloved therapist's hand resting nearby, clean white treatment room, soft clinical light, honest and realistic. 4:5 portrait.

### 9. `t-thread-veins-and-skin-tags.webp`
> Calm close-up of a woman's face in soft profile while a gloved therapist holds a slim generic pen-shaped precision device near her cheek, bright clean treatment room, natural skin with subtle redness and real texture, porcelain and blush palette, reassuring medical-aesthetic photograph. 4:5 portrait.

### 10. `t-waxing.webp`
> Still life of a professional waxing station: a warmer of golden-amber wax, wooden spatulas in a glass jar, folded white towels and a sprig of eucalyptus on a blush pink treatment trolley, soft side light, clean and elegant. 4:5 portrait.

### 11. `t-makeup.webp`
> A makeup artist applying soft-glam occasion makeup to a smiling woman in her early thirties seated in a salon chair, glowing skin with visible natural texture, rosy lips, soft champagne eyeshadow, warm mirror bulbs blurred in the background, joyful wedding-guest mood. 4:5 portrait.

---

## Instagram strip (all 1:1 square, about 800x800)

### 12. `gram-1.webp`
> Overhead shot of a hand with short square nails in glossy French tips with a thin gold line, holding a cappuccino in a white ceramic cup on a marble table. Square 1:1.

### 13. `gram-2.webp`
> Close-up of almond nails in a mismatched pastel set (lilac, mint, butter yellow, blush and baby blue), hand resting on a soft pink knit sweater. Square 1:1.

### 14. `gram-3.webp`
> Macro of glossy pearl chrome nails catching window light, fingers gently curled against a cream silk cloth. Square 1:1.

### 15. `gram-4.webp`
> Close-up of one open eye after a lash lift and tint, lashes curled and defined, laminated brow, natural skin texture, soft daylight. Square 1:1.

### 16. `gram-5.webp`
> Rich burgundy glossy almond gel nails, hand holding a small bouquet of blush peonies, cosy warm light. Square 1:1.

---

## Share preview (optional)

### 17. `og.jpg` (1200x630, landscape 1.91:1)
> Soft-focus still life of blush pink peonies, a blank gold-rimmed appointment card and a small glass bottle of nude nail polish on porcelain-white marble, large empty space on the left, warm natural light. Landscape 1.91:1, no text.

---

### Notes
- Real salon photos build more trust than AI images; swap them in over time.
- Never use AI images as before/after results.
- If you add `og.jpg`, change the Open Graph image in `app/layout.js` from `logo.png` to `og.jpg`.
- Logo files (`logo.png`, `logo.webp`, `logo-640.webp`) are already done: the original upscaled 3x and sharpened.
