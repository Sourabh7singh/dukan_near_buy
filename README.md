# NearbuyDukan 🛒🏥

**The Hyperlocal Digital Ecosystem** connecting local consumers with shops and healthcare institutions. 

NearbuyDukan bridges the gap between everyday users and local businesses by offering a modernized platform for virtual queue management, digital billing, live interactions, and secure records—eliminating waiting times and paper receipts.

---

## 🚀 Features at a Glance

### For Consumers & Patients
* **Live Token Queue Tracking:** Book a virtual token from home and arrive exactly when it's your turn.
* **Location-Based Discovery:** Explore and find nearby registered shops & healthcare centers on a live map.
* **Medical History Vault:** Securely upload, store, and manage family medical reports bound digitally to your profile.
* **Direct Vendor Chat:** Message shop owners and doctors instantly using our built-in real-time chat.

### For Shops & Healthcare Providers
* **Digital Invoice Generation:** Generate robust, tax-friendly "Short Bills" and send them directly to customers digitally.
* **Automated Record Keeping:** Manage daily queues, customer histories, and services in a centralized dashboard.
* **QR Connectivity:** Custom QR codes to allow customers to instantly connect, request tokens, or seamlessly pay.

---

## 🛠 Under the Hood (Tech Stack)

Architected for rapid response, real-time performance, and secure data handling:

- **Framework:** [Next.js App Router](https://nextjs.org) for SSR & Static SEO optimizations.
- **Database:** [MongoDB](https://www.mongodb.com/) combined with [Prisma ORM](https://www.prisma.io/) (v6) for flexible & type-safe schemas.
- **Real-Time Engine:** [Socket.io](https://socket.io/) handling live unidirectional & bidirectional interactions (Queue status & Chat).
- **Authentication:** [NextAuth.js](https://next-auth.js.org/) handling strict, role-based workflows (User, Shop, Institution).
- **Styling & UI:** [Tailwind CSS](https://tailwindcss.com/) alongside [Framer Motion](https://www.framer.com/motion/) for fluid animations.

---

## 💻 Developer Setup 

### 1. Prerequisites 
Ensure you have `Node.js` installed and optionally `pnpm` for package management.

### 2. Environment Variables
Create a `.env` file at the root of the project with your authentication secrets, MongoDB URI, Cloudinary keys, and NextAuth URLs. 

### 3. Install & Database Sync
Run the following to install packages and sync your Prisma schema up to MongoDB. 
*(Note: Be sure to use Prisma 6 as v7 removes the `url` property feature used in this project's schema.)*

```bash
# Install dependencies
pnpm install

# Generate Prisma Client & Push to DB
npx prisma@6 generate
npx prisma@6 db push
```

### 4. Run the Development Server

```bash
pnpm run dev
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🔒 Middleware & Authentication Notes

Access control is strongly handled via NextAuth's `withAuth` and custom generic paths. This ensures routing integrity across the three main user types (User, Institution, Shop Owner).

```javascript
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: async ({ token, req }) => {
      const path = req.nextUrl.pathname;
      if (!token) return false;
      if (token.role === "admin") return true;
      return token.allowedRoutes?.includes(path);
    },
  },
});

export const config = {
  matcher: ["/", "/dashboard/:path*", "/admin/:path*", "/content/:path*"],
};
```

---

<p align="center">
  <i>Architected & Engineered By <a href="https://github.com/Sourabh7singh">Saurabh Singh</a></i>
</p>
