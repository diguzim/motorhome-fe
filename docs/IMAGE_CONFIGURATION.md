# Next.js Image Configuration

This project uses Next.js Image component for optimized image loading. The configuration in `next.config.ts` allows loading images from external domains.

## Current Configuration

### Development

- **Protocol**: `http` and `https`
- **Hostname**: `localhost`
- **Port**: `1337`
- **Path Pattern**: `/uploads/**`

This allows loading images from your local Strapi instance at `http://localhost:1337/uploads/...`

### Adding Production Domains

When deploying to production, add your production image domains to the `remotePatterns` array:

```typescript
{
  protocol: 'https',
  hostname: 'your-api-domain.com',
  pathname: '/uploads/**',
},
```

## Environment Variables

The image loading uses the `NEXT_PUBLIC_IMAGES_BASE_URL` environment variable:

- **Development**: `http://localhost:1337`
- **Production**: Update to your production image server URL

## Security Notes

- Only add trusted domains to `remotePatterns`
- Use specific pathname patterns when possible
- Always use HTTPS in production

## Testing Image Loading

You can test if images are loading correctly by:

1. Check browser developer tools for any image loading errors
2. Verify the generated image URLs match your configuration
3. Test on different screen sizes to ensure responsive images work

## Troubleshooting

If you see errors like "hostname is not configured under images":

1. Make sure the hostname in your image URLs matches the `hostname` in `next.config.ts`
2. Check that the protocol (http/https) matches
3. Verify the pathname pattern covers your image paths
4. Restart your development server after config changes
