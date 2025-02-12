import os
from moviepy.editor import VideoFileClip

def compress_videos(input_folder, output_folder, target_size_mb):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for filename in os.listdir(input_folder):
        if filename.endswith(('.mp4', '.avi', '.mov', '.mkv')):  # Add more formats if needed
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, f"compressed_{filename}")

            # Load the video file
            video = VideoFileClip(input_path)

            # Calculate the compression factor
            original_size = os.path.getsize(input_path) / (1024 * 1024)  # Size in MB
            compression_factor = original_size / target_size_mb
            
            # Compute original bitrate in kbps using file size and duration, if needed.
            # Bitrate in bits per second:
            original_bitrate = (os.path.getsize(input_path) * 8) / video.duration
            # Convert to kbps:
            original_bitrate_kbps = original_bitrate / 1000

            # Compress the video
            if compression_factor > 1:
                # Adjust the bitrate manually instead of using video.bitrate
                new_bitrate = int(original_bitrate_kbps / compression_factor)
                video.write_videofile(output_path, codec='libx264', bitrate=f"{new_bitrate}k")
            else:
                video.write_videofile(output_path, codec='libx264')

            print(f"Compressed {filename} to {output_path}")

if __name__ == "__main__":
    input_folder = "/home/jimmyhan/Desktop/lgplm/PartInstruct.github.io/static/videos/qualitative_results/DP"  # Change this to your input folder
    output_folder = "/home/jimmyhan/Desktop/lgplm/PartInstruct.github.io/static/videos/qualitative_results/DP_compressed"  # Change this to your output folder
    target_size_mb = 0.878  # Set your target size to less than 900 KB

    compress_videos(input_folder, output_folder, target_size_mb) 