import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/contexts/AuthContext";
import { useStories } from "@/contexts/StoriesContext";
import { Upload, Video, X, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const UploadStory = () => {
  const { user } = useAuth();
  const { addStory } = useStories();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    competitionId: '',
    category: '',
  });

  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string>('');
  const [thumbnail, setThumbnail] = useState<string>('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleVideoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        toast.error("Video size must be less than 100MB");
        return;
      }

      if (!file.type.startsWith('video/')) {
        toast.error("Please select a valid video file");
        return;
      }

      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setVideoPreview(url);
      toast.success("Video selected successfully!");
    }
  };

  const handleThumbnailCapture = () => {
    if (videoPreview) {
      const video = document.createElement('video');
      video.src = videoPreview;
      video.currentTime = 2;
      video.onloadeddata = () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(video, 0, 0);
        setThumbnail(canvas.toDataURL());
        toast.success("Thumbnail captured!");
      };
    }
  };

  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!videoFile) {
      toast.error("Please select a video file");
      return;
    }

    if (!formData.title || !formData.description || !formData.competitionId) {
      toast.error("Please fill in all required fields");
      return;
    }

    simulateUpload();

    setTimeout(() => {
      addStory({
        userId: user?.id || '1',
        childName: user?.childName || 'Anonymous',
        age: parseInt(user?.ageGroup?.split('-')[0] || '8'),
        title: formData.title,
        description: formData.description,
        videoUrl: videoPreview,
        thumbnail: thumbnail || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
        competitionId: formData.competitionId,
        trending: false,
        featured: false,
      });

      toast.success("Story uploaded successfully!");
      setTimeout(() => navigate('/profile'), 1500);
    }, 2500);
  };

  const removeVideo = () => {
    setVideoFile(null);
    setVideoPreview('');
    setThumbnail('');
    setUploadProgress(0);
    setUploadComplete(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16 bg-soft-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Upload Your <span className="text-primary">Story</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Share your creativity with the world
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold">Upload Video</h3>
                      <p className="text-sm text-muted-foreground">Max 100MB, 2-5 minutes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold">Add Details</h3>
                      <p className="text-sm text-muted-foreground">Title, description & category</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Card className="border-2 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-primary" />
                    Video Upload
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {!videoFile ? (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-border rounded-xl p-12 text-center cursor-pointer hover:border-primary transition-colors"
                    >
                      <Upload className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-heading font-bold mb-2">
                        Click to upload video
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        MP4, MOV or AVI (max. 100MB)
                      </p>
                      <Button type="button" variant="outline">
                        Select Video
                      </Button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="video/*"
                        onChange={handleVideoSelect}
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
                        <video
                          src={videoPreview}
                          controls
                          className="w-full h-full"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute top-4 right-4"
                          onClick={removeVideo}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-1 p-4 bg-soft-grey rounded-lg">
                          <p className="text-sm font-medium mb-1">File Name</p>
                          <p className="text-sm text-muted-foreground">{videoFile.name}</p>
                        </div>
                        <div className="flex-1 p-4 bg-soft-grey rounded-lg">
                          <p className="text-sm font-medium mb-1">File Size</p>
                          <p className="text-sm text-muted-foreground">
                            {(videoFile.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>

                      {!thumbnail && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleThumbnailCapture}
                          className="w-full"
                        >
                          Capture Thumbnail
                        </Button>
                      )}

                      {thumbnail && (
                        <div className="space-y-2">
                          <Label>Thumbnail Preview</Label>
                          <img
                            src={thumbnail}
                            alt="Thumbnail"
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                      )}

                      {isUploading && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Uploading...</span>
                            <span className="font-bold">{uploadProgress}%</span>
                          </div>
                          <Progress value={uploadProgress} />
                        </div>
                      )}

                      {uploadComplete && (
                        <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-green-800 font-medium">Upload complete!</span>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-2 border-border">
                <CardHeader>
                  <CardTitle>Story Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Story Title *</Label>
                    <Input
                      id="title"
                      required
                      placeholder="e.g., The Magical Forest"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      required
                      placeholder="Tell us about your story..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                    <p className="text-sm text-muted-foreground">
                      {formData.description.length}/500 characters
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="competition">Competition *</Label>
                      <Select
                        value={formData.competitionId}
                        onValueChange={(value) => setFormData({ ...formData, competitionId: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select competition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="winter-tales">Winter Tales 2024</SelectItem>
                          <SelectItem value="mythological">Mythological Adventures</SelectItem>
                          <SelectItem value="future">Future Innovators</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fantasy">Fantasy</SelectItem>
                          <SelectItem value="adventure">Adventure</SelectItem>
                          <SelectItem value="comedy">Comedy</SelectItem>
                          <SelectItem value="drama">Drama</SelectItem>
                          <SelectItem value="educational">Educational</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex gap-3">
                      <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">Guidelines</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Video should be 2-5 minutes long</li>
                          <li>Ensure good lighting and clear audio</li>
                          <li>Original content only</li>
                          <li>Age-appropriate language</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90"
                  disabled={isUploading || !videoFile}
                >
                  {isUploading ? 'Uploading...' : 'Submit Story'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/profile')}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UploadStory;
