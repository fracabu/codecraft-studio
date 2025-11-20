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
          <div class="flex space-x-3 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61583932139220&locale=it_IT" target="_blank" rel="noopener noreferrer" class="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary-500/10 hover:text-primary-400 text-gray-400 transition-all">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 CodeCraft Studio. Tutti i diritti riservati.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <router-link to="/privacy" class="hover:text-primary-400 transition-colors">Privacy Policy</router-link>
          <router-link to="/cookie" class="hover:text-primary-400 transition-colors">Cookie Policy</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
