import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Download, Share2, User } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import html2canvas from 'html2canvas';

const EventTicket = () => {
  const { id } = useParams();

  const handleDownload = async () => {
    const ticket = document.getElementById('ticket');
    if (ticket) {
      const canvas = await html2canvas(ticket);
      const link = document.createElement('a');
      link.download = 'event-ticket.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'My Event Ticket',
        text: 'Check out my ticket for the Annual Hackathon!',
        url: window.location.href
      });
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div id="ticket" className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 px-8 py-6">
            <h1 className="text-2xl font-bold text-white">Annual Hackathon</h1>
            <p className="text-blue-100">Ticket #ACM-2024-001</p>
          </div>
          
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div className="space-y-4">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Attendee</p>
                    <p className="font-medium">John Doe</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">March 15-16, 2024</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Venue</p>
                    <p className="font-medium">JIT Campus</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium">9:00 AM Onwards</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-2 rounded-lg">
                <QRCodeSVG
                  value={`https://jit-acm.org/verify-ticket/${id}`}
                  size={128}
                  level="H"
                  includeMargin={true}
                />
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <button
                onClick={handleDownload}
                className="flex-1 flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                <Download className="h-5 w-5 mr-2" />
                Download
              </button>
              <button
                onClick={handleShare}
                className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EventTicket;