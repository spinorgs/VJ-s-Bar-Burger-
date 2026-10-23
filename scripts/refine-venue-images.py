"""Export responsive venue photographs from the supplied camera originals."""
from pathlib import Path
from PIL import Image, ImageOps, ImageFilter
sources = {
 'pink-cocktail': '0D5BBAF3-3792-4C9A-9AA2-538F180B208A.JPG.jpeg',
 'wide-backbar': '46CB5495-BDE7-4D78-A59D-6BDA3664A639.JPG.jpeg',
 'dining-room': 'BC6A9780-AA9D-44AD-B861-10E806774284.JPG.jpeg',
 'events-dining': '210F6526-FF71-4A0B-A1D3-A1B18819BF31.JPG.jpeg',
 'about-dining': 'ED30BCCE-6413-4A71-9AA1-22AF693301A8.JPG.jpeg',
}
for name, source in sources.items():
 im = ImageOps.exif_transpose(Image.open(Path.home()/'Downloads'/source)).convert('RGB')
 for width in (720,1280,1920,2560):
  out = im.resize((width, round(im.height*width/im.width)), Image.Resampling.LANCZOS)
  out = out.filter(ImageFilter.UnsharpMask(radius=.65, percent=65, threshold=3))
  out.save(f'assets/restaurant/{name}-{width}.webp', quality=91, method=6)
print('Exported 20 responsive photographs from camera originals.')
