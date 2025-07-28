
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, FileText, CheckCircle, Link as LinkIcon, RefreshCw, Shield, LayoutTemplate } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const KundenservicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Handle hash navigation after initial scroll
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Add some offset for the navbar
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main>
        <div id="top" className="relative text-white py-16 px-4">
          {/* Hero background image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://github.com/stone1971grey/projekt-bilder/blob/main/vorteil-direkter-zugriff-auf-dokumente.jpg?raw=true"
              alt="Hero background"
              className="w-full h-full object-cover"
            />
            {/* Overlay to ensure text is readable */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="mb-6">
              <RouterLink to="/#anwendungsfaelle" className="inline-flex items-center text-white hover:text-blue-100 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Overview
              </RouterLink>
            </div>
            <div className="flex items-start gap-6">
              <div className="text-white mt-1">
                <FileText className="h-12 w-12" />
              </div>
              <div id="direkter-zugriff-microsoft-365">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  Direct Access to Selected Microsoft 365 Documents via TYPO3
                </h1>
                <p className="text-xl max-w-3xl">
                  The integration of SPTools allows you to embed Microsoft 365 documents directly on your TYPO3 website. This gives customers quick and easy access to relevant information, increasing the timeliness, reliability, and flexibility of your content, and improving customer interaction and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white py-16" id="support">
          <div className="container mx-auto px-6 max-w-6xl">
            
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6">Example: Access to Product Data Sheets</h3>
              <p className="mb-6 text-gray-700">A customer visits your TYPO3 website to learn about products. On the product page, they find a list of product data sheets in PDF format. Next to each product is a link labeled "Download data sheet".</p>
              
              <div className="grid gap-6 md:grid-cols-2 my-10">
                <div className="bg-gray-50 p-6 rounded-2xl shadow">
                  <h4 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="bg-blue-100 rounded-full p-1 mr-2 text-blue-600">1</span>
                    Select and click the link
                  </h4>
                  <p className="text-gray-600">The customer selects a specific product and clicks the corresponding link to download the related data sheet directly.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow">
                  <h4 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="bg-blue-100 rounded-full p-1 mr-2 text-blue-600">2</span>
                    Direct Online Access
                  </h4>
                  <p className="text-gray-600">Thanks to the integration, the customer gets direct access to the selected document (live access). Alternatively, the document can also be synchronized from Microsoft 365 via the TYPO3 file list and made available to the visitor.</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6">Benefits of Direct Document Access</h3>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <LinkIcon className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Seamless Integration</h4>
                      <p className="text-gray-600">SPTools enables seamless access to Microsoft 365 documents via TYPO3, allowing customers to easily and quickly access relevant information.​</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <Shield className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Security</h4>
                      <p className="text-gray-600">The use of SPTools ensures secure and reliable data transfer between TYPO3 and Microsoft 365.​</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <RefreshCw className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Timeliness and Consistency</h4>
                      <p className="text-gray-600">Thanks to the direct connection between your TYPO3 website and Microsoft 365 via SPTools, the most current and valid document is always displayed. Customers can rely on the accuracy and completeness of the information provided.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <LayoutTemplate className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Flexibility</h4>
                      <p className="text-gray-600">With SPTools, different permission levels can be configured to ensure that customers can only access documents for which they are authorized.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-16 bg-blue-50 p-8 rounded-2xl shadow-md text-center border border-blue-100">
              <h4 className="text-xl font-semibold mb-2">Conclusion: Optimal Document Accessibility with SPTools</h4>
              <p className="text-lg text-gray-700">Direct access to current documents – secure data transfer – perfectly integrated in TYPO3 with <a href="https://sptools.de" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">SPTools</a></p>
            </div>
          </div>
        </section>

        {/* Connect Chemicals Reference Case - UPDATED LAYOUT */}
        <section className="bg-white py-16" id="referenz-connect-chemicals">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold mb-16 text-center">
              Practical Example: Microsoft 365 Document Access at Connect Chemicals
            </h2>

            <div className="mb-12">
              <p className="text-lg text-gray-700 mb-4">
                For the <strong>Connect Chemicals GmbH</strong>, an individual solution was developed to enable direct access to
                <strong> Microsoft 365 documents directly via TYPO3</strong>.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Employees now have a secure, seamless access to central product information, marketing materials, and
                technical data – without leaving the CMS.
              </p>
              <p className="text-lg text-gray-700">
                The integration was seamlessly embedded into the existing <strong>Product Finder</strong>. The Microsoft-365 documents are
                controlled via SharePoint and played out via TYPO3.
              </p>
            </div>

            <div className="mb-12">
              <img
                src="https://raw.githubusercontent.com/stone1971grey/projekt-bilder/main/CC_1920x1080.jpg"
                alt="Screenshot Microsoft 365 Integration bei Connect Chemicals"
                className="rounded-xl shadow-lg w-full h-auto object-cover opacity-0 animate-fadeIn"
              />
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-300 text-blue-900">
              <p className="text-lg font-medium">
                The result: A future-proof system that optimally integrates Microsoft 365 into TYPO3 – for efficient collaboration and
                centralized knowledge access.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default KundenservicePage;
