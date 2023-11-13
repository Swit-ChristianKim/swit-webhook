[![build-and-test](https://github.com/Swit-ChristianKim/swit-webhook/actions/workflows/test.yml/badge.svg)](https://github.com/Swit-ChristianKim/swit-webhook/actions/workflows/test.yml)

# Swit Webhook GitHub Action

Send message at channel and create Task Card

## Prerequisites
- Create Swit web hook url

## Usage

```yaml
- name: Swit-webhook
  uses: Swit-ChristianKim/swit-webhook@v3
  with:
    WEBHOOK_URL: ${{ secrets.WEBHOOK_URL }}
    MESSAGE: "insert message"
```

### Inputs
#### Environment Variables
The following are all _required_.

|name|description|
|---|---|
|`WEBHOOK_URL`| Swit webhook url|
|`MESSAGE`| channel message text and title of task card |
