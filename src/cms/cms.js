import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('links', AboutPagePreview)
CMS.registerPreviewTemplate('media', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
