import { users, projects, services, testimonials, contacts, type User, type InsertUser, type Project, type InsertProject, type Service, type InsertService, type Testimonial, type InsertTestimonial, type Contact, type InsertContact } from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Projects
  getProjects(): Promise<Project[]>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;

  // Services
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;

  // Contacts
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private services: Map<number, Service>;
  private testimonials: Map<number, Testimonial>;
  private contacts: Map<number, Contact>;
  private currentUserId: number;
  private currentProjectId: number;
  private currentServiceId: number;
  private currentTestimonialId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.services = new Map();
    this.testimonials = new Map();
    this.contacts = new Map();
    this.currentUserId = 1;
    this.currentProjectId = 1;
    this.currentServiceId = 1;
    this.currentTestimonialId = 1;
    this.currentContactId = 1;

    this.seedData();
  }

  private seedData() {
    // Seed projects
    const sampleProjects: InsertProject[] = [
      {
        title: "Illuminated Business Sign",
        description: "Custom backlit LED sign with precision cut acrylic and engraved details.",
        category: "light_signs",
        imageUrl: "/0b8bd810-79d6-445e-82a7-fb58811e157a_1754468619376.JPG",
        material: "Acrylic with LED Backlighting",
        technology: "Laser Cutting & Engraving",
        resolution: "0.1mm precision cutting",
        timeline: "5-7 business days",
        challenges: "Achieved uniform light distribution while maintaining crisp text clarity",
        featured: true
      },
      {
        title: "Decorative Light Panel",
        description: "Artistic light panel featuring intricate geometric patterns with LED integration.",
        category: "light_signs",
        imageUrl: "/15f7ed50-25d0-4e7d-9335-f3ec86051ca4_1754468619376.JPG",
        material: "Translucent Acrylic",
        technology: "Laser Engraving & Cutting",
        resolution: "0.05mm detail precision",
        timeline: "4-6 business days",
        challenges: "Created complex pattern while ensuring structural integrity for mounting",
        featured: true
      },
      {
        title: "Custom Logo Light Box",
        description: "Professional edge-lit logo display for corporate branding and signage.",
        category: "light_signs",
        imageUrl: "/4d1b29f3-108a-4c67-9000-129abe22b2b3_1754468619376.JPG",
        material: "Clear Acrylic with Frosted Finish",
        technology: "Precision Laser Engraving",
        resolution: "0.08mm engraving depth",
        timeline: "3-5 business days",
        challenges: "Optimized edge lighting for maximum logo visibility and professional appearance",
        featured: true
      },
      {
        title: "Intricate Mandala Design",
        description: "Detailed mandala pattern laser-etched on wood with precision geometric elements.",
        category: "laser_designs",
        imageUrl: "/6c62b2c4-affd-4ce3-967b-be9d5219befd_1754468619376.JPG",
        material: "Premium Hardwood",
        technology: "Precision Laser Engraving",
        resolution: "0.02mm line precision",
        timeline: "6-8 business days",
        challenges: "Maintained fine detail consistency across complex symmetric patterns",
        featured: true
      },
      {
        title: "Personalized Wedding Plaque",
        description: "Custom laser-engraved wedding memento with intricate decorative borders.",
        category: "laser_designs",
        imageUrl: "/841b8984-9db6-44ec-be7d-133430db87c4_1754468619376.JPG",
        material: "Baltic Birch Plywood",
        technology: "Multi-Pass Laser Engraving",
        resolution: "0.05mm depth variation",
        timeline: "4-7 business days",
        challenges: "Achieved varying engraving depths for dimensional text and decorative elements",
        featured: false
      },
      {
        title: "Organic Flow Vase",
        description: "Flowing organic vase design with complex curved geometries and smooth surfaces.",
        category: "vase_designs",
        imageUrl: "/8bb482d7-d2d2-4a42-a7df-6c1c7c9a3aa4_1754468619376.JPG",
        material: "Premium PLA Plastic",
        technology: "High-Resolution 3D Printing",
        resolution: "0.1mm layer height",
        timeline: "5-7 business days",
        challenges: "Captured intricate organic curves with seamless surface finish",
        featured: false
      },
      {
        title: "Geometric Pattern Vessel",
        description: "Modern geometric vase featuring angular patterns and contemporary styling.",
        category: "vase_designs",
        imageUrl: "/9baa1fc5-220a-432f-b54f-647fca50f1e1_1754468619376.JPG",
        material: "High-Strength PETG",
        technology: "Precision 3D Printing",
        resolution: "0.15mm layer height",
        timeline: "4-6 business days",
        challenges: "Maintained sharp geometric edges while ensuring structural stability",
        featured: false
      },
      {
        title: "Decorative Memorial Plaque",
        description: "Elegant memorial plaque with custom text and decorative border elements.",
        category: "light_signs",
        imageUrl: "/adda121e-7bdb-4eb0-bd31-3634a5e2bff2_1754468619376.JPG",
        material: "Anodized Aluminum",
        technology: "Fiber Laser Engraving",
        resolution: "0.03mm text precision",
        timeline: "3-5 business days",
        challenges: "Achieved permanent, weather-resistant engraving with consistent depth",
        featured: false
      },
      {
        title: "Twisted Spiral Vase",
        description: "Dynamic spiral vase design with flowing helical geometry and artistic appeal.",
        category: "vase_designs",
        imageUrl: "/e8120be9-e78e-4c02-b5fc-9f6f98364c58_1754468619376.JPG",
        material: "Silk PLA Filament",
        technology: "Advanced 3D Printing",
        resolution: "0.12mm layer height",
        timeline: "6-9 business days",
        challenges: "Maintained structural integrity while creating complex spiral geometry",
        featured: false
      },
      {
        title: "Vintage-Style Table Lamp",
        description: "Classic table lamp design with laser-cut lampshade featuring decorative patterns.",
        category: "laser_designs",
        imageUrl: "/e86ad48c-8ea0-44ea-97b3-768295d88184_1754468619376.JPG",
        material: "Wood Veneer Lampshade",
        technology: "Precision Laser Cutting",
        resolution: "0.1mm pattern accuracy",
        timeline: "7-10 business days",
        challenges: "Created intricate pattern while ensuring proper light diffusion and assembly",
        featured: false
      }
    ];

    sampleProjects.forEach(project => this.createProject(project));

    // Seed services
    const sampleServices: InsertService[] = [
      {
        title: "Custom 3D Printing",
        description: "High-quality 3D printing for individuals, businesses, and creators using precision FDM printers and premium materials like PLA and PETG.",
        icon: "printer",
        features: ["Premium PLA and PETG materials", "Variety of colors and finishes", "Prototypes and replacement parts", "Custom-designed products"],
        price: "Contact for quote"
      },
      {
        title: "Rapid Prototyping",
        description: "Turn concepts into physical models fast for product development, testing, and presentations. Perfect for inventors and businesses.",
        icon: "zap",
        features: ["Work from sketches or CAD files", "Fast turnaround times", "Concept validation support", "Help create 3D models"],
        price: "Contact for quote"
      },
      {
        title: "Design & Modeling Support",
        description: "3D design services including CAD modeling, file preparation, and design optimization for strength, functionality, and printability.",
        icon: "drafting-compass",
        features: ["CAD modeling from ideas", "File preparation for printing", "Design optimization for strength", "Functionality and printability focus"],
        price: "Contact for quote"
      },
      {
        title: "Small-Batch Manufacturing",
        description: "Short-run 3D printing ideal for small businesses or events that don't require costly mass production. Perfect for a few dozen parts or products.",
        icon: "package",
        features: ["Few dozen parts or products", "Ideal for small businesses", "Event-specific production", "Cost-effective solution"],
        price: "Contact for quote"
      },
      {
        title: "Custom Laser Engraving",
        description: "Professional laser engraving on wood, acrylic, leather, glass, and coated metals. From personalized gifts to business signage.",
        icon: "laser",
        features: ["Wood, acrylic, leather, glass, metals", "Personalized gifts and business signage", "Logos, names, designs, and text", "Precision laser technology"],
        price: "Contact for quote"
      },
      {
        title: "Product Personalization",
        description: "Make your products unique with custom engravings — perfect for branding, promotional items, or one-of-a-kind gifts.",
        icon: "star",
        features: ["Small and large batch support", "Perfect for branding", "Promotional items", "One-of-a-kind gifts"],
        price: "Contact for quote"
      },
      {
        title: "Cutting & Shaping",
        description: "Laser cutting of thin wood, acrylic, and leather for signs, decorative pieces, or prototype components with clean edges and high accuracy.",
        icon: "scissors",
        features: ["Clean edges and high accuracy", "Signs and decorative pieces", "Prototype components", "Wood, acrylic, and leather"],
        price: "Contact for quote"
      },
      {
        title: "Design Assistance",
        description: "Convert your logo, artwork, or idea into a vector file suitable for laser processing. We help bring your vision to life.",
        icon: "help-circle",
        features: ["Logo conversion", "Artwork preparation", "Vector file creation", "Laser processing optimization"],
        price: "Contact for quote"
      }
    ];

    sampleServices.forEach(service => this.createService(service));

    // Seed testimonials
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "John Doe",
        company: "Tesla Inc.",
        content: "The quality and precision of their work exceeded our expectations. The turnaround time was incredible, and the team was incredibly professional throughout the entire process.",
        rating: 5,
        avatar: "JD"
      },
      {
        name: "Sarah Johnson",
        company: "Boeing",
        content: "3D Print Bureau has been instrumental in accelerating our product development. Their expertise in materials and finishing techniques is unmatched.",
        rating: 5,
        avatar: "SJ"
      },
      {
        name: "Dr. Michael Lee",
        company: "MedTech Solutions",
        content: "Outstanding service and exceptional attention to detail. They helped us prototype and manufacture custom medical devices that met all regulatory requirements.",
        rating: 5,
        avatar: "ML"
      }
    ];

    sampleTestimonials.forEach(testimonial => this.createTestimonial(testimonial));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Project methods
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      project => project.category === category
    );
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { 
      ...insertProject, 
      id,
      featured: insertProject.featured ?? false,
      createdAt: new Date()
    };
    this.projects.set(id, project);
    return project;
  }

  // Service methods
  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = this.currentServiceId++;
    const service: Service = { 
      ...insertService, 
      id,
      price: insertService.price ?? null
    };
    this.services.set(id, service);
    return service;
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id,
      avatar: insertTestimonial.avatar ?? null
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  // Contact methods
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      company: insertContact.company ?? null,
      phone: insertContact.phone ?? null,
      newsletter: insertContact.newsletter ?? false,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();