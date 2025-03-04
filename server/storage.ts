import type { Newsletter, Contact, PortfolioItem, InsertNewsletter, InsertContact, InsertPortfolioItem } from "@shared/schema";

export interface IStorage {
  // Newsletter
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletters(): Promise<Newsletter[]>;
  
  // Contact
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Portfolio
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItem(id: number): Promise<PortfolioItem | undefined>;
}

export class MemStorage implements IStorage {
  private newsletters: Map<number, Newsletter>;
  private contacts: Map<number, Contact>;
  private portfolioItems: Map<number, PortfolioItem>;
  private currentIds: {
    newsletter: number;
    contact: number;
    portfolio: number;
  };

  constructor() {
    this.newsletters = new Map();
    this.contacts = new Map();
    this.portfolioItems = new Map();
    this.currentIds = {
      newsletter: 1,
      contact: 1,
      portfolio: 1
    };

    // Add some sample portfolio items
    this.initializePortfolioItems();
  }

  async createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.currentIds.newsletter++;
    const newNewsletter = {
      ...newsletter,
      id,
      createdAt: new Date()
    };
    this.newsletters.set(id, newNewsletter);
    return newNewsletter;
  }

  async getNewsletters(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.currentIds.contact++;
    const newContact = {
      ...contact,
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, newContact);
    return newContact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem> {
    const id = this.currentIds.portfolio++;
    const newItem = {
      ...item,
      id,
      createdAt: new Date()
    };
    this.portfolioItems.set(id, newItem);
    return newItem;
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values());
  }

  async getPortfolioItem(id: number): Promise<PortfolioItem | undefined> {
    return this.portfolioItems.get(id);
  }

  private initializePortfolioItems() {
    const sampleItems: InsertPortfolioItem[] = [
      {
        title: "Luxury Jewelry Brand Transformation",
        description: "Complete brand identity redesign for a high-end jewelry brand",
        beforeAfter: {
          before: ["https://placehold.co/600x400?text=Before"],
          after: ["https://placehold.co/600x400?text=After"]
        }
      },
      {
        title: "Premium Skincare Packaging",
        description: "Elegant packaging design for a luxury skincare line",
        beforeAfter: {
          before: ["https://placehold.co/600x400?text=Before"],
          after: ["https://placehold.co/600x400?text=After"]
        }
      },
      {
        title: "High-End Fashion Label Branding",
        description: "Sophisticated brand identity for an exclusive fashion house",
        beforeAfter: {
          before: ["https://placehold.co/600x400?text=Before"],
          after: ["https://placehold.co/600x400?text=After"]
        }
      }
    ];

    sampleItems.forEach(item => this.createPortfolioItem(item));
  }
}

export const storage = new MemStorage();
