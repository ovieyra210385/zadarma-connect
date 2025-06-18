
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Loader2, Star } from 'lucide-react';
import { useResourceDownload, DownloadableResource } from '@/hooks/useResourceDownload';

interface DownloadableResourceCardProps {
  resource: DownloadableResource;
  rating?: number;
  downloads?: string;
}

const DownloadableResourceCard: React.FC<DownloadableResourceCardProps> = ({
  resource,
  rating,
  downloads
}) => {
  const { downloadResource, downloading } = useResourceDownload();

  const handleDownload = () => {
    downloadResource(resource);
  };

  const isDownloading = downloading === resource.id;

  return (
    <Card className="p-6 hover:shadow-xl transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg text-gray-900 mb-2">
              {resource.title}
            </CardTitle>
            {(rating || downloads) && (
              <div className="flex items-center space-x-2 mb-2">
                {rating && (
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {rating}
                    </span>
                  </div>
                )}
                {downloads && (
                  <span className="text-sm text-gray-500">
                    • {downloads} descargas
                  </span>
                )}
              </div>
            )}
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              {resource.type}
            </span>
            {resource.size && (
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs ml-2">
                {resource.size}
              </span>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 mb-4">
          {resource.description}
        </CardDescription>
        <Button 
          className="w-full" 
          onClick={handleDownload}
          disabled={isDownloading}
        >
          {isDownloading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Preparando descarga...
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Descargar Gratis
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default DownloadableResourceCard;
