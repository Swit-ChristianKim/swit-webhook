[![build-and-test](https://github.com/Swit-ChristianKim/swit-webhook/actions/workflows/test.yml/badge.svg)](https://github.com/Swit-ChristianKim/swit-webhook/actions/workflows/test.yml)

# Swit Webhook GitHub Action

Send message at channel and create Task Card

## Prerequisites
- Create Swit web hook url

## Usage

```yaml
- uses: actions/checkout@v2
- name: Create Sentry release
  uses: getsentry/action-release@v1
  with:
    WEBHOOK_URL: ${{ secrets.WEBHOOK_URL }}
    MESSAGE
```

### Inputs
#### Environment Variables
The following are all _required_.

|name|description|
|---|---|
|`WEBHOOK_URL`| Swit webhook url|
|`MESSAGE`| channel message text and title of task card |
