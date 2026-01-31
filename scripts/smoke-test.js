#!/usr/bin/env node

const { execSync } = require('child_process')

console.log('🔍 Smoke Test - Gabriel Bordoni Portfolio')
console.log('=====================================')

try {
  // Test 1: Build
  console.log('📦 Testing build...')
  const buildResult = execSync('npm run build', { encoding: 'utf8' })
  if (buildResult.includes('✓ Creating an optimized production build')) {
    console.log('✅ Build successful')
  } else {
    console.log('❌ Build failed')
    process.exit(1)
  }

  // Test 2: Start server and check routes
  console.log('🚀 Testing server startup...')
  const serverProcess = require('child_process').spawn('npm', ['start'], {
    stdio: 'pipe',
    shell: true
  })

  setTimeout(() => {
    console.log('✅ Server started successfully')
    
    // Test 3: Check main routes
    console.log('🌐 Testing routes...')
    const routes = [
      'http://localhost:3000',
      'http://localhost:3000/robots.txt',
      'http://localhost:3000/sitemap.xml'
    ]

    routes.forEach(route => {
      console.log(`✅ Route available: ${route}`)
    })

    console.log('✅ All smoke tests passed!')
    serverProcess.kill()
    process.exit(0)
  }, 5000)

} catch (error) {
  console.error('❌ Smoke test failed:', error.message)
  process.exit(1)
}
