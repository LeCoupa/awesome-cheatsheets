##############################################################################
# FFMPEG — TRANSCODE
##############################################################################

ffmpeg -i input.avi -c:v libx264 -c:a aac output.mp4        # Anything -> MP4 (H.264 + AAC), plays everywhere
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 2M -c:a libopus output.webm  # MP4 -> WebM (VP9 + Opus) for the web
ffmpeg -i input.mkv -c copy output.mp4                      # Remux only: change container, no re-encoding, no quality loss


##############################################################################
# FFMPEG — COMPRESSION & QUALITY
##############################################################################

ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4  # Compress with CRF (18 = high quality, 28 = small file, 23 = sweet spot)
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset slow output.mp4    # Slower preset = smaller file at same quality
ffmpeg -y -i input.mp4 -c:v libx264 -b:v 1M -pass 1 -an -f null /dev/null  # Two-pass encoding, pass 1 (analysis, no audio)
ffmpeg -i input.mp4 -c:v libx264 -b:v 1M -pass 2 -c:a aac -b:a 128k output.mp4     # Two-pass encoding, pass 2 (hits a target size precisely)


##############################################################################
# FFMPEG — AUDIO
##############################################################################

ffmpeg -i input.mp4 -vn -c:a libmp3lame -q:a 2 audio.mp3    # Extract audio as MP3 (-vn = no video, -q:a 2 = high VBR quality)
ffmpeg -i input.mp4 -vn -c:a aac -b:a 192k audio.m4a        # Extract audio as M4A (AAC)
ffmpeg -i input.mp4 -vn -c:a copy audio.aac                 # Extract audio without re-encoding (fastest, codec must fit container)
ffmpeg -i video.mp4 -i new_audio.mp3 -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 -shortest output.mp4  # Replace a video's audio track


##############################################################################
# FFMPEG — GIF
##############################################################################

ffmpeg -i input.mp4 -vf "fps=10,scale=480:-1:flags=lanczos,palettegen" palette.png  # Step 1: generate an optimized color palette
ffmpeg -i input.mp4 -i palette.png -filter_complex "fps=10,scale=480:-1:flags=lanczos[x];[x][1:v]paletteuse" output.gif  # Step 2: render the GIF with that palette


##############################################################################
# FFMPEG — CUT & JOIN
##############################################################################

ffmpeg -ss 00:01:30 -i input.mp4 -t 00:00:30 -c copy clip.mp4       # Fast cut: 30s clip from 1:30 (-ss before -i seeks fast)
ffmpeg -i input.mp4 -ss 00:01:30 -t 00:00:30 -c:v libx264 -c:a aac clip.mp4  # Frame-accurate cut (re-encodes, slower)
ffmpeg -f concat -safe 0 -i list.txt -c copy joined.mp4     # Join videos losslessly (list.txt: one "file 'x.mp4'" per line; same codec required)


##############################################################################
# FFMPEG — SCALE, CROP, OVERLAY
##############################################################################

ffmpeg -i input.mp4 -vf "scale=1280:720" -c:a copy output.mp4      # Scale to exactly 720p
ffmpeg -i input.mp4 -vf "scale=640:-2" output.mp4            # Scale by width, keep aspect ratio (-2 = even height, H.264 needs even dimensions)
ffmpeg -i input.mp4 -vf "crop=640:480:100:50" output.mp4     # Crop a 640x480 region starting at (100, 50)
ffmpeg -i input.mp4 -i logo.png -filter_complex "overlay=W-w-10:10" -c:a copy output.mp4  # Watermark in the top-right corner (10px margin)
ffmpeg -i input.mp4 -vf "subtitles=subs.srt" -c:a copy output.mp4   # Burn subtitles into the video (needs a libass build)


##############################################################################
# FFMPEG — FRAMES & STREAMING
##############################################################################

ffmpeg -ss 00:00:05 -i input.mp4 -vframes 1 poster.jpg       # Extract one frame at 5s (video thumbnail / poster)
ffmpeg -i input.mp4 -vf fps=1 frame_%03d.jpg                 # Dump one JPEG per second (frame_001.jpg, frame_002.jpg, ...)
ffmpeg -re -i input.mp4 -c:v libx264 -preset veryfast -b:v 2500k -c:a aac -b:a 128k -f flv rtmp://live.example.com/app/STREAM_KEY  # Push to an RTMP server (-re = read at native frame rate)

# Full command reference: https://ffmpeg.org/documentation.html
# Trilingual (EN/ES/PT) extended version: https://github.com/Ezra-Zhao/ffmpeg-cheatsheet
