import React, { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  employeeCount: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    employeeCount: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const employeeOptions = [
    { value: '1-10', label: '1-10 Çalışan' },
    { value: '11-50', label: '11-50 Çalışan' },
    { value: '51-100', label: '51-100 Çalışan' },
    { value: '101-500', label: '101-500 Çalışan' },
    { value: '500+', label: '500+ Çalışan' }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Ad Soyad gereklidir';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email gereklidir';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir email adresi girin';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon numarası gereklidir';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Şirket adı gereklidir';
    }

    if (!formData.employeeCount) {
      newErrors.employeeCount = 'Çalışan sayısı seçiniz';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          companyName: '',
          employeeCount: ''
        });
      } else {
        console.error('Form submission error:', result.message);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            İletişime Geçin
          </h2>
          <p className="text-xl text-gray-600">
            Detaylı bilgi almak için formu doldurun
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1C4DA1] focus:border-transparent ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ad Soyad"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1C4DA1] focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1C4DA1] focus:border-transparent ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="0532 000 00 00"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  Şirket Adı *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1C4DA1] focus:border-transparent ${
                    errors.companyName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Şirket Adı"
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.companyName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-2">
                Çalışan Sayısı *
              </label>
              <select
                id="employeeCount"
                name="employeeCount"
                value={formData.employeeCount}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1C4DA1] focus:border-transparent ${
                  errors.employeeCount ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Çalışan sayısı seçiniz</option>
                {employeeOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.employeeCount && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.employeeCount}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#6CBE45] hover:bg-[#5aa83a] text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Gönderiliyor...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Bilgi Almak İçin Gönder</span>
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <p className="text-green-800">Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                <p className="text-red-800">Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;