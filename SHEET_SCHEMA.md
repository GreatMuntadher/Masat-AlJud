# Google Sheets CMS schema

Schema version: `2.0`. Column names are English and fixed; the display content may be Arabic. The Apps Script read/write layer (a later batch) remains the source of trust for validation.

| Sheet | Columns |
|---|---|
| `settings` | `key`, `value`, `type`, `group`, `description`, `active`, `updatedAt` |
| `announcements` | `id`, `title`, `description`, `buttonText`, `url`, `icon`, `type`, `priority`, `startDate`, `endDate`, `active`, `openInNewTab`, `sortOrder`, `createdAt`, `updatedAt` |
| `quickCards` | `id`, `title`, `description`, `buttonText`, `url`, `icon`, `category`, `active`, `openInNewTab`, `sortOrder`, `createdAt`, `updatedAt` |
| `forms` | `id`, `title`, `description`, `buttonText`, `url`, `icon`, `category`, `department`, `active`, `openInNewTab`, `sortOrder`, `createdAt`, `updatedAt` |
| `services` | `id`, `title`, `description`, `buttonText`, `url`, `icon`, `category`, `active`, `openInNewTab`, `sortOrder`, `createdAt`, `updatedAt` |
| `policies` | `id`, `title`, `description`, `fileUrl`, `icon`, `category`, `version`, `publishDate`, `active`, `openInNewTab`, `sortOrder`, `createdAt`, `updatedAt` |
| `adminCards` | `id`, `title`, `description`, `buttonText`, `url`, `icon`, `category`, `active`, `openInNewTab`, `sortOrder`, `createdAt`, `updatedAt` |
| `navigation` | `id`, `label`, `targetType`, `target`, `icon`, `active`, `sortOrder` |
| `socialLinks` | `id`, `platform`, `label`, `url`, `icon`, `active`, `sortOrder` |
| `theme` | `key`, `value`, `description`, `active` |
| `contentSections` | `id`, `sectionKey`, `title`, `description`, `enabled`, `sortOrder` |
| `systemMessages` | `key`, `arabicText`, `fallbackText`, `active` |
| `auditLog` | `timestamp`, `action`, `entity`, `entityId`, `requestId`, `status`, `actor`, `details` |
| `schema` | `entity`, `field`, `type`, `required`, `editable`, `maxLength`, `allowedValues`, `description` |

## Allowed values

- `settings.type`: `text`, `textarea`, `boolean`, `number`, `url`, `email`, `phone`, `color`.
- `announcements.type`: `normal`, `info`, `warning`, `important`, `urgent`, `success`.
- `navigation.targetType`: `section`, `url`, `email`, `phone`.
- `contentSections.sectionKey`: `announcements`, `quickCards`, `forms`, `services`, `policies`, `contact`.
- `theme.key`: `primaryColor`, `secondaryColor`, `accentColor`, `backgroundColor`, `surfaceColor`, `textColor`, `mutedTextColor`, `borderRadius`.
- Boolean columns use `true` or `false`; `sortOrder` and `priority` are non-negative integers.
- `icon` is a name only: `announcement`, `document`, `policy`, `leave`, `employee`, `phone`, `email`, `whatsapp`, `service`, `link`, `warning`, `info`, `success`, `calendar`, `clock`, `admin`.

No sheet accepts HTML, JavaScript, SVG, CSS, a CSS variable name, an arbitrary operation name, or a secret. The current public read API checks URLs and allows only `https:`, `mailto:`, and `tel:` (policies use HTTPS only); it rejects `http:`, `javascript:`, `data:`, `vbscript:`, `file:`, `blob:`, `about:`, and `example.com`. It never exposes `auditLog` or `schema`.
