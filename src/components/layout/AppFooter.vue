<template>
  <footer class="border-t border-white/10 bg-white/[0.02]">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div class="md:col-span-1">
          <img
            src="/logo-code2.png"
            alt="CodeCraft Studio"
            style="height: 48px; width: auto; display: block;"
            class="mb-4"
          />
          <p class="text-sm text-gray-400 leading-relaxed">
            Sviluppiamo app e tool AI-powered per far crescere il tuo business.
          </p>
        </div>

        <!-- Links Veloci -->
        <div>
          <h3 class="text-sm font-semibold text-white mb-4">Navigazione</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-sm text-gray-400 hover:text-primary-400 transition-colors">Home</router-link>
            </li>
            <li>
              <router-link to="/servizi" class="text-sm text-gray-400 hover:text-primary-400 transition-colors">Servizi</router-link>
            </li>
            <li>
              <router-link to="/tool" class="text-sm text-gray-400 hover:text-primary-400 transition-colors">Progetti</router-link>
            </li>
            <li>
              <router-link to="/contatti" class="text-sm text-gray-400 hover:text-primary-400 transition-colors">Contatti</router-link>
            </li>
          </ul>
        </div>

        <!-- Servizi -->
        <div>
          <h3 class="text-sm font-semibold text-white mb-4">Servizi</h3>
          <ul class="space-y-2">
            <li class="text-sm text-gray-400">AI/ML Solutions</li>
            <li class="text-sm text-gray-400">Data Analytics</li>
            <li class="text-sm text-gray-400">Web Applications</li>
            <li class="text-sm text-gray-400">Trading Systems</li>
          </ul>
        </div>

        <!-- Contatti -->
        <div>
          <h3 class="text-sm font-semibold text-white mb-4">Contatti</h3>
          <ul class="space-y-2">
            <li>
              <a href="mailto:info@codecraft.it" class="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                info@codecraft.it
              </a>
            </li>
            <li>
              <a href="tel:+393204933807" class="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                +39 320 4933807
              </a>
            </li>
            <!-- <li class="text-sm text-gray-400">
              P.IVA: IT12345678900
            </li> -->
          </ul>

          <!-- Social Links -->
          <!-- <div class="flex space-x-3 mt-4">
            <a href="#" class="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 text-gray-400 transition-all">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 text-gray-400 transition-all">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 text-gray-400 transition-all">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div> -->
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 CodeCraft Studio. Tutti i diritti riservati.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-primary-400 transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-primary-400 transition-colors">Termini di Servizio</a>
        </div>
      </div>
    </div>
  </footer>
</template>
