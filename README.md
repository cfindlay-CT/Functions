# Supabase Edge Functions

This project contains a set of edge functions built using Supabase. Edge functions allow you to run server-side code closer to your users, improving performance and reducing latency.

## Project Structure

```
supabase-edge-functions
├── functions
│   ├── hello-world.ts       # Edge function that responds with a greeting message
│   └── utils
│       └── index.ts         # Utility functions for edge functions
├── supabase
│   └── config.toml          # Configuration settings for Supabase
├── package.json              # npm configuration file with dependencies and scripts
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/supabase-edge-functions.git
   cd supabase-edge-functions
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Supabase:**
   Update the `supabase/config.toml` file with your Supabase project URL and API keys.

## Usage

To run the edge functions locally, use the following command:

```bash
npm run dev
```

You can access the `helloWorld` function at the specified endpoint.

## Deployment

To deploy the edge functions to Supabase, use the following command:

```bash
npm run deploy
```

Make sure to have your Supabase CLI configured with the correct project before deploying.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.