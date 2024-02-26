import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';

export type CompanyProps = {
  logo?: string | null;
  company: string;
  domain: string;
  external_id?: string | null;
  created_at: Date | string;
  updated_at: Date | string;
};

export class Company {
  private _id: string;
  private props: CompanyProps;
  constructor(
    props: Replace<
      CompanyProps,
      { created_at?: Date | string; updated_at?: Date | string }
    >,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      created_at: props.created_at ?? new Date(),
      updated_at: props.created_at ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set logo(logo: string | null | undefined) {
    this.props.logo = logo;
  }

  public get logo(): string | null | undefined {
    return this.props.logo;
  }

  public set company(company: string) {
    this.props.company = company;
  }

  public get company(): string {
    return this.props.company;
  }

  public set domain(domain: string) {
    this.props.domain = domain;
  }

  public get domain(): string {
    return this.props.domain;
  }

  public set external_id(external_id: string | null | undefined) {
    this.props.external_id = external_id;
  }

  public get external_id(): string | null | undefined {
    return this.props.external_id;
  }

  public get created_at(): Date | string {
    return this.props.created_at;
  }

  public get updated_at(): Date | string {
    return this.props.created_at;
  }
}
