# Secrets Beauty Salon: image prompts for ChatGPT

17 images. Generate each one, then save it as `.webp` with the exact file name shown, in `public/images/secrets-salon/`.

## How to get realistic results

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
