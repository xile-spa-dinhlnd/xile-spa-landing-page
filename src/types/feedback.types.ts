export interface TestimonialItem {
  id: string;
  clientName: string;
  serviceUsed: string;
  rating: number; // 5 sao
  comment: string;
  avatarUrl?: string;
  date: string;
  verifiedBooking: boolean;
  userMeta?: string;
  source?: 'google' | 'direct';
}
