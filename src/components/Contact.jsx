"use client";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import InterviewModal from "./InterviewModal";

function Contact() {
  const [openModal, setOpenModal] = useState(false);

  const handleScheduleInterview = () => {
    setOpenModal(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+92 303 580 8043",
      href: "tel:+923035808043",
      description: "",
    },
    {
      icon: Mail,
      label: "Email",
      value: "m.usman.alix47@gmail.com",
      href: "mailto:m.usman.alix47@gmail.com",
      description: "",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/usmanalix47",
      href: "https://linkedin.com/in/usmanalix47",
      description: "Let's connect professionally",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jhelum, Pakistan",
      href: null,
      description: "",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities and collaborations.
          Feel free to reach out if you&apos;d like to work together.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid  gap-6 mb-12">
        {contactInfo.map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {contact.label}
                  </h3>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={
                        contact.label === "LinkedIn" ? "_blank" : undefined
                      }
                      rel={
                        contact.label === "LinkedIn"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 mb-2"
                    >
                      {contact.value}
                      {contact.label === "LinkedIn" && (
                        <ExternalLink className="w-4 h-4" />
                      )}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-medium mb-2">
                      {contact.value}
                    </p>
                  )}
                  <p className="text-sm text-gray-500">{contact.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Schedule Interview Section */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <Calendar className="w-12 h-12 text-gray-700 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Schedule an Interview?
          </h3>
          <p className="text-gray-600 mb-6">
            I&apos;m currently available for new opportunities. Let&apos;s
            discuss how I can contribute to your team.
          </p>
          <button
            onClick={handleScheduleInterview}
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Interview
          </button>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 max-w-3xl mx-auto">
          Full-Stack Developer with 1.5+ years of experience building scalable
          applications. Skilled in developing responsive UIs with Next.js,
          creating robust APIs using Node.js, and delivering production-ready
          solutions.
        </p>
      </div>
      <InterviewModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default Contact;
