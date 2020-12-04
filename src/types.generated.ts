export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: unknown;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: unknown;
  PrismicImageThumbnailsType: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ImgixUrlParamsInput = {
  /**
   * Specifies an aspect ratio to maintain when resizing and cropping the image.
   * [See docs](https://docs.imgix.com/apis/url/size/ar).
   */
  ar?: Maybe<Scalars['String']>;
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  auto?: Maybe<Scalars['String']>;
  /**
   * Colors the background of padded and partially-transparent images. Default:
   * `fff`. [See docs](https://docs.imgix.com/apis/url/bg).
   */
  bg?: Maybe<Scalars['String']>;
  /**
   * Changes the blend alignment relative to the parent image. [See
   * docs](https://docs.imgix.com/apis/url/blending/blend-align).
   */
  blendAlign?: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  blendalign?: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  ba?: Maybe<Scalars['String']>;
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  blendAlpha?: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  blendalpha?: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  balph?: Maybe<Scalars['Int']>;
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  blendColor?: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendcolor?: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendClr?: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendclr?: Maybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  blendCrop?: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  blendcrop?: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  bc?: Maybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  blendFit?: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  blendfit?: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  bf?: Maybe<Scalars['String']>;
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  blendH?: Maybe<Scalars['Int']>;
  /** Alias for `blendH`. */
  blendh?: Maybe<Scalars['Int']>;
  /** Alias for `blendH`. */
  bh?: Maybe<Scalars['Int']>;
  /**
   * Sets the blend mode for a blend image. Default: `overlay`. [See
   * docs](https://docs.imgix.com/apis/url/blending/blend-mode).
   */
  blendMode?: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  blendmode?: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  bm?: Maybe<Scalars['String']>;
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  blendPad?: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  blendpad?: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  bp?: Maybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  blendSize?: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  blendsize?: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  bs?: Maybe<Scalars['String']>;
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  blendW?: Maybe<Scalars['Int']>;
  /** Alias for `blendW`. */
  blendw?: Maybe<Scalars['Int']>;
  /** Alias for `blendW`. */
  bw?: Maybe<Scalars['Int']>;
  /**
   * Adjusts the x-offset of the blend image relative to its parent. Default: `0`.
   * [See docs](https://docs.imgix.com/apis/url/blending/blend-x).
   */
  blendX?: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  blendx?: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  bx?: Maybe<Scalars['Int']>;
  /**
   * Adjusts the y-offset of the blend image relative to its parent. Default: `0`.
   * [See docs](https://docs.imgix.com/apis/url/blending/blend-y).
   */
  blendY?: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  blendy?: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  by?: Maybe<Scalars['Int']>;
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  blend?: Maybe<Scalars['String']>;
  /** Alias for `blend`. */
  b?: Maybe<Scalars['String']>;
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  blur?: Maybe<Scalars['Int']>;
  /** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
  borderBottom?: Maybe<Scalars['Int']>;
  /** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
  borderLeft?: Maybe<Scalars['Int']>;
  /**
   * Sets the inner radius of the image's border in pixels. [See
   * docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner).
   */
  borderRadiusInner?: Maybe<Scalars['String']>;
  /**
   * Sets the outer radius of the image's border in pixels. [See
   * docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius).
   */
  borderRadius?: Maybe<Scalars['String']>;
  /** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
  borderRight?: Maybe<Scalars['Int']>;
  /** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
  borderTop?: Maybe<Scalars['Int']>;
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  border?: Maybe<Scalars['String']>;
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  bri?: Maybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  ch?: Maybe<Scalars['String']>;
  /**
   * Specifies the output chroma subsampling rate. Default: `420`. [See
   * docs](https://docs.imgix.com/apis/url/format/chromasub).
   */
  chromasub?: Maybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  colorquant?: Maybe<Scalars['Int']>;
  /**
   * Specifies how many colors to include in a palette-extraction response.
   * Default: `6`. [See
   * docs](https://docs.imgix.com/apis/url/color-palette/colors).
   */
  colors?: Maybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  con?: Maybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  cornerRadius?: Maybe<Scalars['String']>;
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  crop?: Maybe<Scalars['String']>;
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  cs?: Maybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  dl?: Maybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  dpi?: Maybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  dpr?: Maybe<Scalars['Float']>;
  /**
   * Changes the alpha of the duotone effect atop the source image. Default: `100`.
   * [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha).
   */
  duotoneAlpha?: Maybe<Scalars['Int']>;
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  duotone?: Maybe<Scalars['String']>;
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  exp?: Maybe<Scalars['Int']>;
  /**
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that
   * time will output a 404 status code. [See
   * docs](https://docs.imgix.com/apis/url/expires).
   */
  expires?: Maybe<Scalars['String']>;
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  faceindex?: Maybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  facepad?: Maybe<Scalars['Float']>;
  /**
   * Specifies that face data should be included in output when combined with
   * `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces).
   */
  faces?: Maybe<Scalars['Int']>;
  /**
   * Sets the fill color for images with additional space created by the fit
   * setting. Default: `fff`. [See
   * docs](https://docs.imgix.com/apis/url/fill/fill-color).
   */
  fillColor?: Maybe<Scalars['String']>;
  /** Alias for `fillColor`. */
  fillcolor?: Maybe<Scalars['String']>;
  /**
   * Determines how to fill in additional space created by the fit setting. [See
   * docs](https://docs.imgix.com/apis/url/fill/fill).
   */
  fill?: Maybe<Scalars['String']>;
  /**
   * Specifies how to map the source image to the output image dimensions. Default:
   * `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit).
   */
  fit?: Maybe<Scalars['String']>;
  /** Alias for `fit`. */
  f?: Maybe<Scalars['String']>;
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  flip?: Maybe<Scalars['String']>;
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  fm?: Maybe<Scalars['String']>;
  /**
   * Displays crosshairs identifying the location of the set focal point. Default:
   * `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug).
   */
  fpDebug?: Maybe<Scalars['Boolean']>;
  /**
   * Sets the relative horizontal value for the focal point of an image. [See
   * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x).
   */
  fpX?: Maybe<Scalars['Int']>;
  /**
   * Sets the relative vertical value for the focal point of an image. [See
   * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y).
   */
  fpY?: Maybe<Scalars['Int']>;
  /**
   * Sets the relative zoom value for the focal point of an image. [See
   * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z).
   */
  fpZ?: Maybe<Scalars['Int']>;
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  gam?: Maybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. */
  gridColors?: Maybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. */
  gridSize?: Maybe<Scalars['Int']>;
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  h?: Maybe<Scalars['Int']>;
  /** Alias for `h`. */
  height?: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  high?: Maybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  htn?: Maybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  hue?: Maybe<Scalars['Int']>;
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  invert?: Maybe<Scalars['Boolean']>;
  /** Alias for `invert`. */
  inv?: Maybe<Scalars['Boolean']>;
  /**
   * Specifies that the output image should be a lossless variant. Default:
   * `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless).
   */
  lossless?: Maybe<Scalars['Boolean']>;
  /**
   * Changes the watermark alignment relative to the parent image. [See
   * docs](https://docs.imgix.com/apis/url/watermark/mark-align).
   */
  markAlign?: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  ma?: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  markalign?: Maybe<Scalars['String']>;
  /**
   * Changes the alpha of the watermark image. Default: `100`. [See
   * docs](https://docs.imgix.com/apis/url/watermark/mark-alpha).
   */
  markAlpha?: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  markalpha?: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  malph?: Maybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  markBase?: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  mb?: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  markbase?: Maybe<Scalars['String']>;
  /**
   * Specifies the fit mode for watermark images. Default: `clip`. [See
   * docs](https://docs.imgix.com/apis/url/watermark/mark-fit).
   */
  markFit?: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  mf?: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  markfit?: Maybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  markH?: Maybe<Scalars['Int']>;
  /** Alias for `markH`. */
  mh?: Maybe<Scalars['Int']>;
  /** Alias for `markH`. */
  markh?: Maybe<Scalars['Int']>;
  /** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  markPad?: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  mp?: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  markpad?: Maybe<Scalars['Int']>;
  /**
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   * Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot).
   */
  markRot?: Maybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  markScale?: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  ms?: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  markscale?: Maybe<Scalars['Int']>;
  /** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
  markTile?: Maybe<Scalars['String']>;
  /** Alias for `markTile`. */
  mtile?: Maybe<Scalars['String']>;
  /** Alias for `markTile`. */
  marktile?: Maybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  markW?: Maybe<Scalars['Int']>;
  /** Alias for `markW`. */
  mw?: Maybe<Scalars['Int']>;
  /** Alias for `markW`. */
  markw?: Maybe<Scalars['Int']>;
  /**
   * Adjusts the x-offset of the watermark image relative to its parent. [See
   * docs](https://docs.imgix.com/apis/url/watermark/mark-x).
   */
  markX?: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  mx?: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  markx?: Maybe<Scalars['Int']>;
  /**
   * Adjusts the y-offset of the watermark image relative to its parent. [See
   * docs](https://docs.imgix.com/apis/url/watermark/mark-y).
   */
  markY?: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  my?: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  marky?: Maybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  mark?: Maybe<Scalars['String']>;
  /** Alias for `mark`. */
  m?: Maybe<Scalars['String']>;
  /**
   * Colors the background of the transparent mask area of images. Default: `fff`.
   * [See docs](https://docs.imgix.com/apis/url/mask/mask-bg).
   */
  maskBg?: Maybe<Scalars['String']>;
  /** Alias for `maskBg`. */
  maskbg?: Maybe<Scalars['String']>;
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  mask?: Maybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  maxH?: Maybe<Scalars['Int']>;
  /** Alias for `maxH`. */
  maxHeight?: Maybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  maxW?: Maybe<Scalars['Int']>;
  /** Alias for `maxW`. */
  maxWidth?: Maybe<Scalars['Int']>;
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  minH?: Maybe<Scalars['Int']>;
  /** Alias for `minH`. */
  minHeight?: Maybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  minW?: Maybe<Scalars['Int']>;
  /** Alias for `minW`. */
  minWidth?: Maybe<Scalars['Int']>;
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  monochrome?: Maybe<Scalars['String']>;
  /** Alias for `monochrome`. */
  mono?: Maybe<Scalars['String']>;
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  nr?: Maybe<Scalars['Int']>;
  /**
   * Provides a threshold by which to sharpen an image. Default: `20`. [See
   * docs](https://docs.imgix.com/apis/url/noise-reduction/nrs).
   */
  nrs?: Maybe<Scalars['Int']>;
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  orient?: Maybe<Scalars['Int']>;
  /** Alias for `orient`. */
  or?: Maybe<Scalars['Int']>;
  /** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
  padBottom?: Maybe<Scalars['Int']>;
  /** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
  padLeft?: Maybe<Scalars['Int']>;
  /** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
  padRight?: Maybe<Scalars['Int']>;
  /** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
  padTop?: Maybe<Scalars['Int']>;
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  pad?: Maybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
  page?: Maybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  palette?: Maybe<Scalars['String']>;
  /** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
  pdfAnnotation?: Maybe<Scalars['Boolean']>;
  /** Alias for `pdfAnnotation`. */
  annotation?: Maybe<Scalars['Boolean']>;
  /**
   * Specifies a CSS prefix for all classes in palette-extraction. Default:
   * `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix).
   */
  prefix?: Maybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  px?: Maybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  q?: Maybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  rect?: Maybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  rot?: Maybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  sat?: Maybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  sepia?: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  shad?: Maybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  sharp?: Maybe<Scalars['Float']>;
  /** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
  transparency?: Maybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  trimColor?: Maybe<Scalars['String']>;
  /** Alias for `trimColor`. */
  trimcolor?: Maybe<Scalars['String']>;
  /**
   * Specifies the mean difference on a trim operation. Default: `11`. [See
   * docs](https://docs.imgix.com/apis/url/trim/trim-md).
   */
  trimMd?: Maybe<Scalars['Float']>;
  /** Alias for `trimMd`. */
  trimmd?: Maybe<Scalars['Float']>;
  /**
   * Pads the area of the source image before trimming. Default: `0`. [See
   * docs](https://docs.imgix.com/apis/url/trim/trim-pad).
   */
  trimPad?: Maybe<Scalars['Int']>;
  /** Alias for `trimPad`. */
  trimpad?: Maybe<Scalars['Int']>;
  /**
   * Specifies the standard deviation on a trim operation. Default: `10`. [See
   * docs](https://docs.imgix.com/apis/url/trim/trim-sd).
   */
  trimSd?: Maybe<Scalars['Float']>;
  /** Alias for `trimSd`. */
  trimsd?: Maybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  trimTol?: Maybe<Scalars['Float']>;
  /** Alias for `trimTol`. */
  trimtol?: Maybe<Scalars['Float']>;
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  trim?: Maybe<Scalars['String']>;
  /**
   * Sets the vertical and horizontal alignment of rendered text relative to the
   * base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align).
   */
  txtAlign?: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  txtalign?: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  ta?: Maybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  txtClip?: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  txtclip?: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  tcl?: Maybe<Scalars['String']>;
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  txtColor?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtcolor?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtClr?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtclr?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  tc?: Maybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  txtFit?: Maybe<Scalars['String']>;
  /** Alias for `txtFit`. */
  txtfit?: Maybe<Scalars['String']>;
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  txtFont?: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  tf?: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  txtfont?: Maybe<Scalars['String']>;
  /**
   * Sets the leading (line spacing) for rendered text. Only works on the
   * multi-line text endpoint. Default: `0`. [See
   * docs](https://docs.imgix.com/apis/url/typesetting/txt-lead).
   */
  txtLead?: Maybe<Scalars['Int']>;
  /** Alias for `txtLead`. */
  txtlead?: Maybe<Scalars['Int']>;
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  txtLig?: Maybe<Scalars['Int']>;
  /** Alias for `txtLig`. */
  txtlig?: Maybe<Scalars['Int']>;
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  txtLineColor?: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtlinecolor?: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtLineClr?: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtlineclr?: Maybe<Scalars['String']>;
  /**
   * Outlines the rendered text with a specified color. Default: `0`. [See
   * docs](https://docs.imgix.com/apis/url/text/txt-line).
   */
  txtLine?: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  txtline?: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  tl?: Maybe<Scalars['Int']>;
  /**
   * Specifies the padding (in device-independent pixels) between a textbox and the
   * edges of the base image. [See
   * docs](https://docs.imgix.com/apis/url/text/txt-pad).
   */
  txtPad?: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  txtpad?: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  tp?: Maybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  txtShad?: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  txtshad?: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  tsh?: Maybe<Scalars['Float']>;
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  txtSize?: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  tsz?: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  txtsize?: Maybe<Scalars['Int']>;
  /**
   * Sets the tracking (letter spacing) for rendered text. Only works on the
   * multi-line text endpoint. Default: `0`. [See
   * docs](https://docs.imgix.com/apis/url/typesetting/txt-track).
   */
  txtTrack?: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  txttrack?: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  tt?: Maybe<Scalars['Int']>;
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  txtWidth?: Maybe<Scalars['Int']>;
  /** Alias for `txtWidth`. */
  txtwidth?: Maybe<Scalars['Int']>;
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  txt?: Maybe<Scalars['String']>;
  /** Alias for `txt`. */
  t?: Maybe<Scalars['String']>;
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  usm?: Maybe<Scalars['Int']>;
  /**
   * Specifies the radius for an unsharp mask operation. Default: `2.5`. [See
   * docs](https://docs.imgix.com/apis/url/adjustment/usmrad).
   */
  usmrad?: Maybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  vib?: Maybe<Scalars['Int']>;
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  w?: Maybe<Scalars['Int']>;
  /** Alias for `w`. */
  width?: Maybe<Scalars['Int']>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PrismicAllDocumentTypes = PrismicCohort | PrismicCohortSchedule | PrismicFellow | PrismicInteriorPage | PrismicNavigation | PrismicNewsCategory | PrismicNewsPost | PrismicPage | PrismicSettings;

export type PrismicCohort = PrismicDocument & Node & {
  data?: Maybe<PrismicCohortDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicCohortFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicCohortLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicCohortConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicCohortEdge>;
  nodes: Array<PrismicCohort>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicCohortGroupConnection>;
};


export type PrismicCohortConnectionDistinctArgs = {
  field: PrismicCohortFieldsEnum;
};


export type PrismicCohortConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicCohortFieldsEnum;
};

export type PrismicCohortDataType = {
  title?: Maybe<PrismicStructuredTextType>;
  cohort_number?: Maybe<Scalars['Float']>;
};

export type PrismicCohortDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  cohort_number?: Maybe<FloatQueryOperatorInput>;
};

export type PrismicCohortEdge = {
  next?: Maybe<PrismicCohort>;
  node: PrismicCohort;
  previous?: Maybe<PrismicCohort>;
};

export enum PrismicCohortFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataCohortNumber = 'data___cohort_number',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicCohortFilterInput = {
  data?: Maybe<PrismicCohortDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicCohortGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicCohortEdge>;
  nodes: Array<PrismicCohort>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicCohortSchedule = PrismicDocument & Node & {
  data?: Maybe<PrismicCohortScheduleDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicCohortScheduleFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicCohortScheduleLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicCohortScheduleBodySection = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicCohortScheduleBodySectionPrimaryType>;
  items?: Maybe<Array<Maybe<PrismicCohortScheduleBodySectionItemType>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicCohortScheduleBodySectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicCohortScheduleBodySectionEdge>;
  nodes: Array<PrismicCohortScheduleBodySection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicCohortScheduleBodySectionGroupConnection>;
};


export type PrismicCohortScheduleBodySectionConnectionDistinctArgs = {
  field: PrismicCohortScheduleBodySectionFieldsEnum;
};


export type PrismicCohortScheduleBodySectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicCohortScheduleBodySectionFieldsEnum;
};

export type PrismicCohortScheduleBodySectionEdge = {
  next?: Maybe<PrismicCohortScheduleBodySection>;
  node: PrismicCohortScheduleBodySection;
  previous?: Maybe<PrismicCohortScheduleBodySection>;
};

export enum PrismicCohortScheduleBodySectionFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryDescriptionHeadingHtml = 'primary___description_heading___html',
  PrimaryDescriptionHeadingText = 'primary___description_heading___text',
  PrimaryDescriptionHeadingRaw = 'primary___description_heading___raw',
  PrimaryDatesHeadingHtml = 'primary___dates_heading___html',
  PrimaryDatesHeadingText = 'primary___dates_heading___text',
  PrimaryDatesHeadingRaw = 'primary___dates_heading___raw',
  Items = 'items',
  ItemsEventDescriptionHtml = 'items___event_description___html',
  ItemsEventDescriptionText = 'items___event_description___text',
  ItemsEventDescriptionRaw = 'items___event_description___raw',
  ItemsEventDateHtml = 'items___event_date___html',
  ItemsEventDateText = 'items___event_date___text',
  ItemsEventDateRaw = 'items___event_date___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicCohortScheduleBodySectionFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicCohortScheduleBodySectionPrimaryTypeFilterInput>;
  items?: Maybe<PrismicCohortScheduleBodySectionItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicCohortScheduleBodySectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicCohortScheduleBodySectionEdge>;
  nodes: Array<PrismicCohortScheduleBodySection>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicCohortScheduleBodySectionItemType = {
  event_description?: Maybe<PrismicStructuredTextType>;
  event_date?: Maybe<PrismicStructuredTextType>;
};

export type PrismicCohortScheduleBodySectionItemTypeFilterInput = {
  event_description?: Maybe<PrismicStructuredTextTypeFilterInput>;
  event_date?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicCohortScheduleBodySectionItemTypeFilterListInput = {
  elemMatch?: Maybe<PrismicCohortScheduleBodySectionItemTypeFilterInput>;
};

export type PrismicCohortScheduleBodySectionPrimaryType = {
  description_heading?: Maybe<PrismicStructuredTextType>;
  dates_heading?: Maybe<PrismicStructuredTextType>;
};

export type PrismicCohortScheduleBodySectionPrimaryTypeFilterInput = {
  description_heading?: Maybe<PrismicStructuredTextTypeFilterInput>;
  dates_heading?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicCohortScheduleBodySectionSortInput = {
  fields?: Maybe<Array<Maybe<PrismicCohortScheduleBodySectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicCohortScheduleBodySlicesType = PrismicCohortScheduleBodySection;

export type PrismicCohortScheduleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicCohortScheduleEdge>;
  nodes: Array<PrismicCohortSchedule>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicCohortScheduleGroupConnection>;
};


export type PrismicCohortScheduleConnectionDistinctArgs = {
  field: PrismicCohortScheduleFieldsEnum;
};


export type PrismicCohortScheduleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicCohortScheduleFieldsEnum;
};

export type PrismicCohortScheduleDataType = {
  title?: Maybe<PrismicStructuredTextType>;
  body?: Maybe<Array<Maybe<PrismicCohortScheduleBodySlicesType>>>;
};

export type PrismicCohortScheduleDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicCohortScheduleEdge = {
  next?: Maybe<PrismicCohortSchedule>;
  node: PrismicCohortSchedule;
  previous?: Maybe<PrismicCohortSchedule>;
};

export enum PrismicCohortScheduleFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicCohortScheduleFilterInput = {
  data?: Maybe<PrismicCohortScheduleDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicCohortScheduleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicCohortScheduleEdge>;
  nodes: Array<PrismicCohortSchedule>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicCohortScheduleSortInput = {
  fields?: Maybe<Array<Maybe<PrismicCohortScheduleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicCohortSortInput = {
  fields?: Maybe<Array<Maybe<PrismicCohortFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicDocument = {
  /** The document's data object without transformations exactly as it comes from the Prismic API. */
  dataRaw: Scalars['JSON'];
  /**
   * The document's data object without transformations. The object is stringified
   * via `JSON.stringify` to eliminate the need to declare subfields.
   * @deprecated Use `dataRaw` instead which returns JSON.
   */
  dataString?: Maybe<Scalars['String']>;
  /** The document's initial publication date. */
  first_publication_date?: Maybe<Scalars['Date']>;
  /** The document's Prismic API URL. */
  href?: Maybe<Scalars['String']>;
  /** The document's URL derived via the link resolver. */
  url?: Maybe<Scalars['String']>;
  /** Globally unique identifier. Note that this differs from the `prismicID` field. */
  id: Scalars['ID'];
  /** The document's language. */
  lang: Scalars['String'];
  /** The document's most recent publication date */
  last_publication_date?: Maybe<Scalars['Date']>;
  /** The document's list of tags. */
  tags: Array<Scalars['String']>;
  /** Alternate languages for the document. */
  alternate_languages: Array<PrismicLinkType>;
  /** The document's Prismic API ID type. */
  type: Scalars['String'];
  /** The document's Prismic ID. */
  prismicId: Scalars['ID'];
  /**
   * Marks the document as previewable using Prismic's preview system. Include this
   * field if updates to the document should be previewable by content editors
   * before publishing. **Note: the value of this field is not stable and should
   * not be used directly**.
   */
  _previewable: Scalars['ID'];
};


export type PrismicDocumentFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicDocumentLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Embed videos, songs, tweets, slices, etc. */
export type PrismicEmbedType = {
  /** The ID of the resource author. Fetched via oEmbed data. */
  author_id?: Maybe<Scalars['ID']>;
  /** The name of the author/owner of the resource. Fetched via oEmbed data. */
  author_name?: Maybe<Scalars['String']>;
  /** A URL for the author/owner of the resource. Fetched via oEmbed data. */
  author_url?: Maybe<Scalars['String']>;
  /**
   * The suggested cache lifetime for this resource, in seconds. Consumers may
   * choose to use this value or not. Fetched via oEmbed data.
   */
  cache_age?: Maybe<Scalars['String']>;
  /** The URL of the resource. */
  embed_url?: Maybe<Scalars['String']>;
  /**
   * The HTML required to display the resource. The HTML should have no padding or
   * margins. Consumers may wish to load the HTML in an off-domain iframe to avoid
   * XSS vulnerabilities. Fetched via oEmbed data.
   */
  html?: Maybe<Scalars['String']>;
  /** The name of the resource. */
  name?: Maybe<Scalars['String']>;
  /** The name of the resource provider. Fetched via oEmbed data. */
  provider_name?: Maybe<Scalars['String']>;
  /** The URL of the resource provider. Fetched via oEmbed data. */
  provider_url?: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_height?: Maybe<Scalars['Int']>;
  /** A URL to a thumbnail image representing the resource. Fetched via oEmbed data. */
  thumbnail_url?: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_width?: Maybe<Scalars['Int']>;
  /** A text title, describing the resource. Fetched via oEmbed data. */
  title?: Maybe<Scalars['String']>;
  /** The resource type. Fetched via oEmbed data. */
  type?: Maybe<Scalars['String']>;
  /** The oEmbed version number. */
  version?: Maybe<Scalars['String']>;
  /** The source URL of the resource. Fetched via oEmbed data. */
  url?: Maybe<Scalars['String']>;
  /** The width in pixel of the resource. Fetched via oEmbed data. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixel of the resource. Fetched via oEmbed data. */
  height?: Maybe<Scalars['Int']>;
  /** The ID of the resource media. Fetched via oEmbed data. */
  media_id?: Maybe<Scalars['ID']>;
  /** A description for the resource. */
  description?: Maybe<Scalars['String']>;
};

export type PrismicEmbedTypeFilterInput = {
  author_id?: Maybe<IdQueryOperatorInput>;
  author_name?: Maybe<StringQueryOperatorInput>;
  author_url?: Maybe<StringQueryOperatorInput>;
  cache_age?: Maybe<StringQueryOperatorInput>;
  embed_url?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  provider_name?: Maybe<StringQueryOperatorInput>;
  provider_url?: Maybe<StringQueryOperatorInput>;
  thumbnail_height?: Maybe<IntQueryOperatorInput>;
  thumbnail_url?: Maybe<StringQueryOperatorInput>;
  thumbnail_width?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  media_id?: Maybe<IdQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type PrismicFellow = PrismicDocument & Node & {
  data?: Maybe<PrismicFellowDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicFellowFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicFellowLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicFellowConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicFellowEdge>;
  nodes: Array<PrismicFellow>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicFellowGroupConnection>;
};


export type PrismicFellowConnectionDistinctArgs = {
  field: PrismicFellowFieldsEnum;
};


export type PrismicFellowConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicFellowFieldsEnum;
};

export type PrismicFellowDataType = {
  name?: Maybe<PrismicStructuredTextType>;
  cohort?: Maybe<PrismicLinkType>;
  biography?: Maybe<PrismicStructuredTextType>;
  portrait?: Maybe<PrismicImageType>;
  photo?: Maybe<PrismicImageType>;
};

export type PrismicFellowDataTypeFilterInput = {
  name?: Maybe<PrismicStructuredTextTypeFilterInput>;
  cohort?: Maybe<PrismicLinkTypeFilterInput>;
  biography?: Maybe<PrismicStructuredTextTypeFilterInput>;
  portrait?: Maybe<PrismicImageTypeFilterInput>;
  photo?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicFellowEdge = {
  next?: Maybe<PrismicFellow>;
  node: PrismicFellow;
  previous?: Maybe<PrismicFellow>;
};

export enum PrismicFellowFieldsEnum {
  DataNameHtml = 'data___name___html',
  DataNameText = 'data___name___text',
  DataNameRaw = 'data___name___raw',
  DataCohortLinkType = 'data___cohort___link_type',
  DataCohortIsBroken = 'data___cohort___isBroken',
  DataCohortUrl = 'data___cohort___url',
  DataCohortTarget = 'data___cohort___target',
  DataCohortSize = 'data___cohort___size',
  DataCohortId = 'data___cohort___id',
  DataCohortType = 'data___cohort___type',
  DataCohortTags = 'data___cohort___tags',
  DataCohortLang = 'data___cohort___lang',
  DataCohortSlug = 'data___cohort___slug',
  DataCohortUid = 'data___cohort___uid',
  DataCohortRaw = 'data___cohort___raw',
  DataBiographyHtml = 'data___biography___html',
  DataBiographyText = 'data___biography___text',
  DataBiographyRaw = 'data___biography___raw',
  DataPortraitAlt = 'data___portrait___alt',
  DataPortraitCopyright = 'data___portrait___copyright',
  DataPortraitDimensionsWidth = 'data___portrait___dimensions___width',
  DataPortraitDimensionsHeight = 'data___portrait___dimensions___height',
  DataPortraitUrl = 'data___portrait___url',
  DataPortraitFixedBase64 = 'data___portrait___fixed___base64',
  DataPortraitFixedSrc = 'data___portrait___fixed___src',
  DataPortraitFixedSrcSet = 'data___portrait___fixed___srcSet',
  DataPortraitFixedSrcWebp = 'data___portrait___fixed___srcWebp',
  DataPortraitFixedSrcSetWebp = 'data___portrait___fixed___srcSetWebp',
  DataPortraitFixedSizes = 'data___portrait___fixed___sizes',
  DataPortraitFixedWidth = 'data___portrait___fixed___width',
  DataPortraitFixedHeight = 'data___portrait___fixed___height',
  DataPortraitFluidBase64 = 'data___portrait___fluid___base64',
  DataPortraitFluidSrc = 'data___portrait___fluid___src',
  DataPortraitFluidSrcSet = 'data___portrait___fluid___srcSet',
  DataPortraitFluidSrcWebp = 'data___portrait___fluid___srcWebp',
  DataPortraitFluidSrcSetWebp = 'data___portrait___fluid___srcSetWebp',
  DataPortraitFluidSizes = 'data___portrait___fluid___sizes',
  DataPortraitFluidAspectRatio = 'data___portrait___fluid___aspectRatio',
  DataPortraitLocalFileSourceInstanceName = 'data___portrait___localFile___sourceInstanceName',
  DataPortraitLocalFileAbsolutePath = 'data___portrait___localFile___absolutePath',
  DataPortraitLocalFileRelativePath = 'data___portrait___localFile___relativePath',
  DataPortraitLocalFileExtension = 'data___portrait___localFile___extension',
  DataPortraitLocalFileSize = 'data___portrait___localFile___size',
  DataPortraitLocalFilePrettySize = 'data___portrait___localFile___prettySize',
  DataPortraitLocalFileModifiedTime = 'data___portrait___localFile___modifiedTime',
  DataPortraitLocalFileAccessTime = 'data___portrait___localFile___accessTime',
  DataPortraitLocalFileChangeTime = 'data___portrait___localFile___changeTime',
  DataPortraitLocalFileBirthTime = 'data___portrait___localFile___birthTime',
  DataPortraitLocalFileRoot = 'data___portrait___localFile___root',
  DataPortraitLocalFileDir = 'data___portrait___localFile___dir',
  DataPortraitLocalFileBase = 'data___portrait___localFile___base',
  DataPortraitLocalFileExt = 'data___portrait___localFile___ext',
  DataPortraitLocalFileName = 'data___portrait___localFile___name',
  DataPortraitLocalFileRelativeDirectory = 'data___portrait___localFile___relativeDirectory',
  DataPortraitLocalFileDev = 'data___portrait___localFile___dev',
  DataPortraitLocalFileMode = 'data___portrait___localFile___mode',
  DataPortraitLocalFileNlink = 'data___portrait___localFile___nlink',
  DataPortraitLocalFileUid = 'data___portrait___localFile___uid',
  DataPortraitLocalFileGid = 'data___portrait___localFile___gid',
  DataPortraitLocalFileRdev = 'data___portrait___localFile___rdev',
  DataPortraitLocalFileIno = 'data___portrait___localFile___ino',
  DataPortraitLocalFileAtimeMs = 'data___portrait___localFile___atimeMs',
  DataPortraitLocalFileMtimeMs = 'data___portrait___localFile___mtimeMs',
  DataPortraitLocalFileCtimeMs = 'data___portrait___localFile___ctimeMs',
  DataPortraitLocalFileAtime = 'data___portrait___localFile___atime',
  DataPortraitLocalFileMtime = 'data___portrait___localFile___mtime',
  DataPortraitLocalFileCtime = 'data___portrait___localFile___ctime',
  DataPortraitLocalFileBirthtime = 'data___portrait___localFile___birthtime',
  DataPortraitLocalFileBirthtimeMs = 'data___portrait___localFile___birthtimeMs',
  DataPortraitLocalFileId = 'data___portrait___localFile___id',
  DataPortraitLocalFileChildren = 'data___portrait___localFile___children',
  DataPortraitThumbnails = 'data___portrait___thumbnails',
  DataPhotoAlt = 'data___photo___alt',
  DataPhotoCopyright = 'data___photo___copyright',
  DataPhotoDimensionsWidth = 'data___photo___dimensions___width',
  DataPhotoDimensionsHeight = 'data___photo___dimensions___height',
  DataPhotoUrl = 'data___photo___url',
  DataPhotoFixedBase64 = 'data___photo___fixed___base64',
  DataPhotoFixedSrc = 'data___photo___fixed___src',
  DataPhotoFixedSrcSet = 'data___photo___fixed___srcSet',
  DataPhotoFixedSrcWebp = 'data___photo___fixed___srcWebp',
  DataPhotoFixedSrcSetWebp = 'data___photo___fixed___srcSetWebp',
  DataPhotoFixedSizes = 'data___photo___fixed___sizes',
  DataPhotoFixedWidth = 'data___photo___fixed___width',
  DataPhotoFixedHeight = 'data___photo___fixed___height',
  DataPhotoFluidBase64 = 'data___photo___fluid___base64',
  DataPhotoFluidSrc = 'data___photo___fluid___src',
  DataPhotoFluidSrcSet = 'data___photo___fluid___srcSet',
  DataPhotoFluidSrcWebp = 'data___photo___fluid___srcWebp',
  DataPhotoFluidSrcSetWebp = 'data___photo___fluid___srcSetWebp',
  DataPhotoFluidSizes = 'data___photo___fluid___sizes',
  DataPhotoFluidAspectRatio = 'data___photo___fluid___aspectRatio',
  DataPhotoLocalFileSourceInstanceName = 'data___photo___localFile___sourceInstanceName',
  DataPhotoLocalFileAbsolutePath = 'data___photo___localFile___absolutePath',
  DataPhotoLocalFileRelativePath = 'data___photo___localFile___relativePath',
  DataPhotoLocalFileExtension = 'data___photo___localFile___extension',
  DataPhotoLocalFileSize = 'data___photo___localFile___size',
  DataPhotoLocalFilePrettySize = 'data___photo___localFile___prettySize',
  DataPhotoLocalFileModifiedTime = 'data___photo___localFile___modifiedTime',
  DataPhotoLocalFileAccessTime = 'data___photo___localFile___accessTime',
  DataPhotoLocalFileChangeTime = 'data___photo___localFile___changeTime',
  DataPhotoLocalFileBirthTime = 'data___photo___localFile___birthTime',
  DataPhotoLocalFileRoot = 'data___photo___localFile___root',
  DataPhotoLocalFileDir = 'data___photo___localFile___dir',
  DataPhotoLocalFileBase = 'data___photo___localFile___base',
  DataPhotoLocalFileExt = 'data___photo___localFile___ext',
  DataPhotoLocalFileName = 'data___photo___localFile___name',
  DataPhotoLocalFileRelativeDirectory = 'data___photo___localFile___relativeDirectory',
  DataPhotoLocalFileDev = 'data___photo___localFile___dev',
  DataPhotoLocalFileMode = 'data___photo___localFile___mode',
  DataPhotoLocalFileNlink = 'data___photo___localFile___nlink',
  DataPhotoLocalFileUid = 'data___photo___localFile___uid',
  DataPhotoLocalFileGid = 'data___photo___localFile___gid',
  DataPhotoLocalFileRdev = 'data___photo___localFile___rdev',
  DataPhotoLocalFileIno = 'data___photo___localFile___ino',
  DataPhotoLocalFileAtimeMs = 'data___photo___localFile___atimeMs',
  DataPhotoLocalFileMtimeMs = 'data___photo___localFile___mtimeMs',
  DataPhotoLocalFileCtimeMs = 'data___photo___localFile___ctimeMs',
  DataPhotoLocalFileAtime = 'data___photo___localFile___atime',
  DataPhotoLocalFileMtime = 'data___photo___localFile___mtime',
  DataPhotoLocalFileCtime = 'data___photo___localFile___ctime',
  DataPhotoLocalFileBirthtime = 'data___photo___localFile___birthtime',
  DataPhotoLocalFileBirthtimeMs = 'data___photo___localFile___birthtimeMs',
  DataPhotoLocalFileId = 'data___photo___localFile___id',
  DataPhotoLocalFileChildren = 'data___photo___localFile___children',
  DataPhotoThumbnails = 'data___photo___thumbnails',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicFellowFilterInput = {
  data?: Maybe<PrismicFellowDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicFellowGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicFellowEdge>;
  nodes: Array<PrismicFellow>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicFellowSortInput = {
  fields?: Maybe<Array<Maybe<PrismicFellowFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** A field for storing geo-coordinates. */
export type PrismicGeoPointType = {
  /** The latitude value of the geo-coordinate. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude value of the geo-coordinate. */
  longitude?: Maybe<Scalars['Float']>;
};

/** Dimensions for images. */
export type PrismicImageDimensionsType = {
  /** Width of the image in pixels. */
  width: Scalars['Int'];
  /** Height of the image in pixels. */
  height: Scalars['Int'];
};

export type PrismicImageDimensionsTypeFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicImageFixedType = {
  base64: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Scalars['String'];
  srcSetWebp: Scalars['String'];
  sizes: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type PrismicImageFixedTypeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicImageFluidType = {
  base64: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Scalars['String'];
  srcSetWebp: Scalars['String'];
  sizes: Scalars['String'];
  aspectRatio: Scalars['Float'];
};

export type PrismicImageFluidTypeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type PrismicImageInterface = {
  /** The image's alternative text. */
  alt?: Maybe<Scalars['String']>;
  /** The image's copyright text. */
  copyright?: Maybe<Scalars['String']>;
  /** The image's dimensions. */
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** The image's URL on Prismic's CDN. */
  url?: Maybe<Scalars['String']>;
  /** The locally downloaded image if `shouldNormalizeImage` returns true. */
  localFile?: Maybe<File>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
};


export type PrismicImageThumbnailsTypeQueryOperatorInput = {
  eq?: Maybe<Scalars['PrismicImageThumbnailsType']>;
  ne?: Maybe<Scalars['PrismicImageThumbnailsType']>;
  in?: Maybe<Array<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
  nin?: Maybe<Array<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
};

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailType = PrismicImageInterface & {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  url?: Maybe<Scalars['String']>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
  localFile?: Maybe<File>;
};


/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeUrlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

/** An image field with optional constrained thumbnails. */
export type PrismicImageType = PrismicImageInterface & {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  url?: Maybe<Scalars['String']>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
  localFile?: Maybe<File>;
  thumbnails?: Maybe<Scalars['PrismicImageThumbnailsType']>;
};


/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

export type PrismicImageTypeFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<PrismicImageFixedTypeFilterInput>;
  fluid?: Maybe<PrismicImageFluidTypeFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  thumbnails?: Maybe<PrismicImageThumbnailsTypeQueryOperatorInput>;
};

export type PrismicInteriorPage = PrismicDocument & Node & {
  data?: Maybe<PrismicInteriorPageDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicInteriorPageFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicInteriorPageLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicInteriorPageBodyAnchor = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicInteriorPageBodyAnchorPrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicInteriorPageBodyAnchorConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyAnchorEdge>;
  nodes: Array<PrismicInteriorPageBodyAnchor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicInteriorPageBodyAnchorGroupConnection>;
};


export type PrismicInteriorPageBodyAnchorConnectionDistinctArgs = {
  field: PrismicInteriorPageBodyAnchorFieldsEnum;
};


export type PrismicInteriorPageBodyAnchorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicInteriorPageBodyAnchorFieldsEnum;
};

export type PrismicInteriorPageBodyAnchorEdge = {
  next?: Maybe<PrismicInteriorPageBodyAnchor>;
  node: PrismicInteriorPageBodyAnchor;
  previous?: Maybe<PrismicInteriorPageBodyAnchor>;
};

export enum PrismicInteriorPageBodyAnchorFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryId = 'primary___id',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicInteriorPageBodyAnchorFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicInteriorPageBodyAnchorPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicInteriorPageBodyAnchorGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyAnchorEdge>;
  nodes: Array<PrismicInteriorPageBodyAnchor>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicInteriorPageBodyAnchorPrimaryType = {
  id?: Maybe<Scalars['String']>;
};

export type PrismicInteriorPageBodyAnchorPrimaryTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
};

export type PrismicInteriorPageBodyAnchorSortInput = {
  fields?: Maybe<Array<Maybe<PrismicInteriorPageBodyAnchorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicInteriorPageBodyCohortSchedule = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicInteriorPageBodyCohortSchedulePrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicInteriorPageBodyCohortScheduleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyCohortScheduleEdge>;
  nodes: Array<PrismicInteriorPageBodyCohortSchedule>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicInteriorPageBodyCohortScheduleGroupConnection>;
};


export type PrismicInteriorPageBodyCohortScheduleConnectionDistinctArgs = {
  field: PrismicInteriorPageBodyCohortScheduleFieldsEnum;
};


export type PrismicInteriorPageBodyCohortScheduleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicInteriorPageBodyCohortScheduleFieldsEnum;
};

export type PrismicInteriorPageBodyCohortScheduleEdge = {
  next?: Maybe<PrismicInteriorPageBodyCohortSchedule>;
  node: PrismicInteriorPageBodyCohortSchedule;
  previous?: Maybe<PrismicInteriorPageBodyCohortSchedule>;
};

export enum PrismicInteriorPageBodyCohortScheduleFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryCohortScheduleLinkType = 'primary___cohort_schedule___link_type',
  PrimaryCohortScheduleIsBroken = 'primary___cohort_schedule___isBroken',
  PrimaryCohortScheduleUrl = 'primary___cohort_schedule___url',
  PrimaryCohortScheduleTarget = 'primary___cohort_schedule___target',
  PrimaryCohortScheduleSize = 'primary___cohort_schedule___size',
  PrimaryCohortScheduleId = 'primary___cohort_schedule___id',
  PrimaryCohortScheduleType = 'primary___cohort_schedule___type',
  PrimaryCohortScheduleTags = 'primary___cohort_schedule___tags',
  PrimaryCohortScheduleLang = 'primary___cohort_schedule___lang',
  PrimaryCohortScheduleSlug = 'primary___cohort_schedule___slug',
  PrimaryCohortScheduleUid = 'primary___cohort_schedule___uid',
  PrimaryCohortScheduleRaw = 'primary___cohort_schedule___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicInteriorPageBodyCohortScheduleFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicInteriorPageBodyCohortSchedulePrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicInteriorPageBodyCohortScheduleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyCohortScheduleEdge>;
  nodes: Array<PrismicInteriorPageBodyCohortSchedule>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicInteriorPageBodyCohortSchedulePrimaryType = {
  cohort_schedule?: Maybe<PrismicLinkType>;
};

export type PrismicInteriorPageBodyCohortSchedulePrimaryTypeFilterInput = {
  cohort_schedule?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicInteriorPageBodyCohortScheduleSortInput = {
  fields?: Maybe<Array<Maybe<PrismicInteriorPageBodyCohortScheduleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicInteriorPageBodyDivider = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicInteriorPageBodyDividerConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyDividerEdge>;
  nodes: Array<PrismicInteriorPageBodyDivider>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicInteriorPageBodyDividerGroupConnection>;
};


export type PrismicInteriorPageBodyDividerConnectionDistinctArgs = {
  field: PrismicInteriorPageBodyDividerFieldsEnum;
};


export type PrismicInteriorPageBodyDividerConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicInteriorPageBodyDividerFieldsEnum;
};

export type PrismicInteriorPageBodyDividerEdge = {
  next?: Maybe<PrismicInteriorPageBodyDivider>;
  node: PrismicInteriorPageBodyDivider;
  previous?: Maybe<PrismicInteriorPageBodyDivider>;
};

export enum PrismicInteriorPageBodyDividerFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicInteriorPageBodyDividerFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicInteriorPageBodyDividerGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyDividerEdge>;
  nodes: Array<PrismicInteriorPageBodyDivider>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicInteriorPageBodyDividerSortInput = {
  fields?: Maybe<Array<Maybe<PrismicInteriorPageBodyDividerFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicInteriorPageBodyImages = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<PrismicInteriorPageBodyImagesItemType>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicInteriorPageBodyImagesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyImagesEdge>;
  nodes: Array<PrismicInteriorPageBodyImages>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicInteriorPageBodyImagesGroupConnection>;
};


export type PrismicInteriorPageBodyImagesConnectionDistinctArgs = {
  field: PrismicInteriorPageBodyImagesFieldsEnum;
};


export type PrismicInteriorPageBodyImagesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicInteriorPageBodyImagesFieldsEnum;
};

export type PrismicInteriorPageBodyImagesEdge = {
  next?: Maybe<PrismicInteriorPageBodyImages>;
  node: PrismicInteriorPageBodyImages;
  previous?: Maybe<PrismicInteriorPageBodyImages>;
};

export enum PrismicInteriorPageBodyImagesFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  Items = 'items',
  ItemsImageAlt = 'items___image___alt',
  ItemsImageCopyright = 'items___image___copyright',
  ItemsImageDimensionsWidth = 'items___image___dimensions___width',
  ItemsImageDimensionsHeight = 'items___image___dimensions___height',
  ItemsImageUrl = 'items___image___url',
  ItemsImageFixedBase64 = 'items___image___fixed___base64',
  ItemsImageFixedSrc = 'items___image___fixed___src',
  ItemsImageFixedSrcSet = 'items___image___fixed___srcSet',
  ItemsImageFixedSrcWebp = 'items___image___fixed___srcWebp',
  ItemsImageFixedSrcSetWebp = 'items___image___fixed___srcSetWebp',
  ItemsImageFixedSizes = 'items___image___fixed___sizes',
  ItemsImageFixedWidth = 'items___image___fixed___width',
  ItemsImageFixedHeight = 'items___image___fixed___height',
  ItemsImageFluidBase64 = 'items___image___fluid___base64',
  ItemsImageFluidSrc = 'items___image___fluid___src',
  ItemsImageFluidSrcSet = 'items___image___fluid___srcSet',
  ItemsImageFluidSrcWebp = 'items___image___fluid___srcWebp',
  ItemsImageFluidSrcSetWebp = 'items___image___fluid___srcSetWebp',
  ItemsImageFluidSizes = 'items___image___fluid___sizes',
  ItemsImageFluidAspectRatio = 'items___image___fluid___aspectRatio',
  ItemsImageLocalFileSourceInstanceName = 'items___image___localFile___sourceInstanceName',
  ItemsImageLocalFileAbsolutePath = 'items___image___localFile___absolutePath',
  ItemsImageLocalFileRelativePath = 'items___image___localFile___relativePath',
  ItemsImageLocalFileExtension = 'items___image___localFile___extension',
  ItemsImageLocalFileSize = 'items___image___localFile___size',
  ItemsImageLocalFilePrettySize = 'items___image___localFile___prettySize',
  ItemsImageLocalFileModifiedTime = 'items___image___localFile___modifiedTime',
  ItemsImageLocalFileAccessTime = 'items___image___localFile___accessTime',
  ItemsImageLocalFileChangeTime = 'items___image___localFile___changeTime',
  ItemsImageLocalFileBirthTime = 'items___image___localFile___birthTime',
  ItemsImageLocalFileRoot = 'items___image___localFile___root',
  ItemsImageLocalFileDir = 'items___image___localFile___dir',
  ItemsImageLocalFileBase = 'items___image___localFile___base',
  ItemsImageLocalFileExt = 'items___image___localFile___ext',
  ItemsImageLocalFileName = 'items___image___localFile___name',
  ItemsImageLocalFileRelativeDirectory = 'items___image___localFile___relativeDirectory',
  ItemsImageLocalFileDev = 'items___image___localFile___dev',
  ItemsImageLocalFileMode = 'items___image___localFile___mode',
  ItemsImageLocalFileNlink = 'items___image___localFile___nlink',
  ItemsImageLocalFileUid = 'items___image___localFile___uid',
  ItemsImageLocalFileGid = 'items___image___localFile___gid',
  ItemsImageLocalFileRdev = 'items___image___localFile___rdev',
  ItemsImageLocalFileIno = 'items___image___localFile___ino',
  ItemsImageLocalFileAtimeMs = 'items___image___localFile___atimeMs',
  ItemsImageLocalFileMtimeMs = 'items___image___localFile___mtimeMs',
  ItemsImageLocalFileCtimeMs = 'items___image___localFile___ctimeMs',
  ItemsImageLocalFileAtime = 'items___image___localFile___atime',
  ItemsImageLocalFileMtime = 'items___image___localFile___mtime',
  ItemsImageLocalFileCtime = 'items___image___localFile___ctime',
  ItemsImageLocalFileBirthtime = 'items___image___localFile___birthtime',
  ItemsImageLocalFileBirthtimeMs = 'items___image___localFile___birthtimeMs',
  ItemsImageLocalFileId = 'items___image___localFile___id',
  ItemsImageLocalFileChildren = 'items___image___localFile___children',
  ItemsImageThumbnails = 'items___image___thumbnails',
  ItemsCaptionHtml = 'items___caption___html',
  ItemsCaptionText = 'items___caption___text',
  ItemsCaptionRaw = 'items___caption___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicInteriorPageBodyImagesFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  items?: Maybe<PrismicInteriorPageBodyImagesItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicInteriorPageBodyImagesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyImagesEdge>;
  nodes: Array<PrismicInteriorPageBodyImages>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicInteriorPageBodyImagesItemType = {
  image?: Maybe<PrismicImageType>;
  caption?: Maybe<PrismicStructuredTextType>;
};

export type PrismicInteriorPageBodyImagesItemTypeFilterInput = {
  image?: Maybe<PrismicImageTypeFilterInput>;
  caption?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicInteriorPageBodyImagesItemTypeFilterListInput = {
  elemMatch?: Maybe<PrismicInteriorPageBodyImagesItemTypeFilterInput>;
};

export type PrismicInteriorPageBodyImagesSortInput = {
  fields?: Maybe<Array<Maybe<PrismicInteriorPageBodyImagesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicInteriorPageBodySlicesType = PrismicInteriorPageBodyText | PrismicInteriorPageBodyImages | PrismicInteriorPageBodyVideo | PrismicInteriorPageBodyTextIntro | PrismicInteriorPageBodyAnchor | PrismicInteriorPageBodyCohortSchedule | PrismicInteriorPageBodyDivider | PrismicInteriorPageBodyStaffDirectory;

export type PrismicInteriorPageBodyStaffDirectory = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<PrismicInteriorPageBodyStaffDirectoryItemType>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicInteriorPageBodyStaffDirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyStaffDirectoryEdge>;
  nodes: Array<PrismicInteriorPageBodyStaffDirectory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicInteriorPageBodyStaffDirectoryGroupConnection>;
};


export type PrismicInteriorPageBodyStaffDirectoryConnectionDistinctArgs = {
  field: PrismicInteriorPageBodyStaffDirectoryFieldsEnum;
};


export type PrismicInteriorPageBodyStaffDirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicInteriorPageBodyStaffDirectoryFieldsEnum;
};

export type PrismicInteriorPageBodyStaffDirectoryEdge = {
  next?: Maybe<PrismicInteriorPageBodyStaffDirectory>;
  node: PrismicInteriorPageBodyStaffDirectory;
  previous?: Maybe<PrismicInteriorPageBodyStaffDirectory>;
};

export enum PrismicInteriorPageBodyStaffDirectoryFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  Items = 'items',
  ItemsPhotoAlt = 'items___photo___alt',
  ItemsPhotoCopyright = 'items___photo___copyright',
  ItemsPhotoDimensionsWidth = 'items___photo___dimensions___width',
  ItemsPhotoDimensionsHeight = 'items___photo___dimensions___height',
  ItemsPhotoUrl = 'items___photo___url',
  ItemsPhotoFixedBase64 = 'items___photo___fixed___base64',
  ItemsPhotoFixedSrc = 'items___photo___fixed___src',
  ItemsPhotoFixedSrcSet = 'items___photo___fixed___srcSet',
  ItemsPhotoFixedSrcWebp = 'items___photo___fixed___srcWebp',
  ItemsPhotoFixedSrcSetWebp = 'items___photo___fixed___srcSetWebp',
  ItemsPhotoFixedSizes = 'items___photo___fixed___sizes',
  ItemsPhotoFixedWidth = 'items___photo___fixed___width',
  ItemsPhotoFixedHeight = 'items___photo___fixed___height',
  ItemsPhotoFluidBase64 = 'items___photo___fluid___base64',
  ItemsPhotoFluidSrc = 'items___photo___fluid___src',
  ItemsPhotoFluidSrcSet = 'items___photo___fluid___srcSet',
  ItemsPhotoFluidSrcWebp = 'items___photo___fluid___srcWebp',
  ItemsPhotoFluidSrcSetWebp = 'items___photo___fluid___srcSetWebp',
  ItemsPhotoFluidSizes = 'items___photo___fluid___sizes',
  ItemsPhotoFluidAspectRatio = 'items___photo___fluid___aspectRatio',
  ItemsPhotoLocalFileSourceInstanceName = 'items___photo___localFile___sourceInstanceName',
  ItemsPhotoLocalFileAbsolutePath = 'items___photo___localFile___absolutePath',
  ItemsPhotoLocalFileRelativePath = 'items___photo___localFile___relativePath',
  ItemsPhotoLocalFileExtension = 'items___photo___localFile___extension',
  ItemsPhotoLocalFileSize = 'items___photo___localFile___size',
  ItemsPhotoLocalFilePrettySize = 'items___photo___localFile___prettySize',
  ItemsPhotoLocalFileModifiedTime = 'items___photo___localFile___modifiedTime',
  ItemsPhotoLocalFileAccessTime = 'items___photo___localFile___accessTime',
  ItemsPhotoLocalFileChangeTime = 'items___photo___localFile___changeTime',
  ItemsPhotoLocalFileBirthTime = 'items___photo___localFile___birthTime',
  ItemsPhotoLocalFileRoot = 'items___photo___localFile___root',
  ItemsPhotoLocalFileDir = 'items___photo___localFile___dir',
  ItemsPhotoLocalFileBase = 'items___photo___localFile___base',
  ItemsPhotoLocalFileExt = 'items___photo___localFile___ext',
  ItemsPhotoLocalFileName = 'items___photo___localFile___name',
  ItemsPhotoLocalFileRelativeDirectory = 'items___photo___localFile___relativeDirectory',
  ItemsPhotoLocalFileDev = 'items___photo___localFile___dev',
  ItemsPhotoLocalFileMode = 'items___photo___localFile___mode',
  ItemsPhotoLocalFileNlink = 'items___photo___localFile___nlink',
  ItemsPhotoLocalFileUid = 'items___photo___localFile___uid',
  ItemsPhotoLocalFileGid = 'items___photo___localFile___gid',
  ItemsPhotoLocalFileRdev = 'items___photo___localFile___rdev',
  ItemsPhotoLocalFileIno = 'items___photo___localFile___ino',
  ItemsPhotoLocalFileAtimeMs = 'items___photo___localFile___atimeMs',
  ItemsPhotoLocalFileMtimeMs = 'items___photo___localFile___mtimeMs',
  ItemsPhotoLocalFileCtimeMs = 'items___photo___localFile___ctimeMs',
  ItemsPhotoLocalFileAtime = 'items___photo___localFile___atime',
  ItemsPhotoLocalFileMtime = 'items___photo___localFile___mtime',
  ItemsPhotoLocalFileCtime = 'items___photo___localFile___ctime',
  ItemsPhotoLocalFileBirthtime = 'items___photo___localFile___birthtime',
  ItemsPhotoLocalFileBirthtimeMs = 'items___photo___localFile___birthtimeMs',
  ItemsPhotoLocalFileId = 'items___photo___localFile___id',
  ItemsPhotoLocalFileChildren = 'items___photo___localFile___children',
  ItemsPhotoThumbnails = 'items___photo___thumbnails',
  ItemsNameHtml = 'items___name___html',
  ItemsNameText = 'items___name___text',
  ItemsNameRaw = 'items___name___raw',
  ItemsStaffTitleHtml = 'items___staff_title___html',
  ItemsStaffTitleText = 'items___staff_title___text',
  ItemsStaffTitleRaw = 'items___staff_title___raw',
  ItemsBiographyHtml = 'items___biography___html',
  ItemsBiographyText = 'items___biography___text',
  ItemsBiographyRaw = 'items___biography___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicInteriorPageBodyStaffDirectoryFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  items?: Maybe<PrismicInteriorPageBodyStaffDirectoryItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicInteriorPageBodyStaffDirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyStaffDirectoryEdge>;
  nodes: Array<PrismicInteriorPageBodyStaffDirectory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicInteriorPageBodyStaffDirectoryItemType = {
  photo?: Maybe<PrismicImageType>;
  name?: Maybe<PrismicStructuredTextType>;
  staff_title?: Maybe<PrismicStructuredTextType>;
  biography?: Maybe<PrismicStructuredTextType>;
};

export type PrismicInteriorPageBodyStaffDirectoryItemTypeFilterInput = {
  photo?: Maybe<PrismicImageTypeFilterInput>;
  name?: Maybe<PrismicStructuredTextTypeFilterInput>;
  staff_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  biography?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicInteriorPageBodyStaffDirectoryItemTypeFilterListInput = {
  elemMatch?: Maybe<PrismicInteriorPageBodyStaffDirectoryItemTypeFilterInput>;
};

export type PrismicInteriorPageBodyStaffDirectorySortInput = {
  fields?: Maybe<Array<Maybe<PrismicInteriorPageBodyStaffDirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicInteriorPageBodyText = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicInteriorPageBodyTextPrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicInteriorPageBodyTextConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyTextEdge>;
  nodes: Array<PrismicInteriorPageBodyText>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicInteriorPageBodyTextGroupConnection>;
};


export type PrismicInteriorPageBodyTextConnectionDistinctArgs = {
  field: PrismicInteriorPageBodyTextFieldsEnum;
};


export type PrismicInteriorPageBodyTextConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicInteriorPageBodyTextFieldsEnum;
};

export type PrismicInteriorPageBodyTextEdge = {
  next?: Maybe<PrismicInteriorPageBodyText>;
  node: PrismicInteriorPageBodyText;
  previous?: Maybe<PrismicInteriorPageBodyText>;
};

export enum PrismicInteriorPageBodyTextFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryTextHtml = 'primary___text___html',
  PrimaryTextText = 'primary___text___text',
  PrimaryTextRaw = 'primary___text___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicInteriorPageBodyTextFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicInteriorPageBodyTextPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicInteriorPageBodyTextGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyTextEdge>;
  nodes: Array<PrismicInteriorPageBodyText>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicInteriorPageBodyTextIntro = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicInteriorPageBodyTextIntroPrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicInteriorPageBodyTextIntroConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyTextIntroEdge>;
  nodes: Array<PrismicInteriorPageBodyTextIntro>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicInteriorPageBodyTextIntroGroupConnection>;
};


export type PrismicInteriorPageBodyTextIntroConnectionDistinctArgs = {
  field: PrismicInteriorPageBodyTextIntroFieldsEnum;
};


export type PrismicInteriorPageBodyTextIntroConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicInteriorPageBodyTextIntroFieldsEnum;
};

export type PrismicInteriorPageBodyTextIntroEdge = {
  next?: Maybe<PrismicInteriorPageBodyTextIntro>;
  node: PrismicInteriorPageBodyTextIntro;
  previous?: Maybe<PrismicInteriorPageBodyTextIntro>;
};

export enum PrismicInteriorPageBodyTextIntroFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryIntroductoryTextHtml = 'primary___introductory_text___html',
  PrimaryIntroductoryTextText = 'primary___introductory_text___text',
  PrimaryIntroductoryTextRaw = 'primary___introductory_text___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicInteriorPageBodyTextIntroFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicInteriorPageBodyTextIntroPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicInteriorPageBodyTextIntroGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyTextIntroEdge>;
  nodes: Array<PrismicInteriorPageBodyTextIntro>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicInteriorPageBodyTextIntroPrimaryType = {
  introductory_text?: Maybe<PrismicStructuredTextType>;
};

export type PrismicInteriorPageBodyTextIntroPrimaryTypeFilterInput = {
  introductory_text?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicInteriorPageBodyTextIntroSortInput = {
  fields?: Maybe<Array<Maybe<PrismicInteriorPageBodyTextIntroFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicInteriorPageBodyTextPrimaryType = {
  text?: Maybe<PrismicStructuredTextType>;
};

export type PrismicInteriorPageBodyTextPrimaryTypeFilterInput = {
  text?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicInteriorPageBodyTextSortInput = {
  fields?: Maybe<Array<Maybe<PrismicInteriorPageBodyTextFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicInteriorPageBodyVideo = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicInteriorPageBodyVideoPrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicInteriorPageBodyVideoConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyVideoEdge>;
  nodes: Array<PrismicInteriorPageBodyVideo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicInteriorPageBodyVideoGroupConnection>;
};


export type PrismicInteriorPageBodyVideoConnectionDistinctArgs = {
  field: PrismicInteriorPageBodyVideoFieldsEnum;
};


export type PrismicInteriorPageBodyVideoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicInteriorPageBodyVideoFieldsEnum;
};

export type PrismicInteriorPageBodyVideoEdge = {
  next?: Maybe<PrismicInteriorPageBodyVideo>;
  node: PrismicInteriorPageBodyVideo;
  previous?: Maybe<PrismicInteriorPageBodyVideo>;
};

export enum PrismicInteriorPageBodyVideoFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryVideoAuthorId = 'primary___video___author_id',
  PrimaryVideoAuthorName = 'primary___video___author_name',
  PrimaryVideoAuthorUrl = 'primary___video___author_url',
  PrimaryVideoCacheAge = 'primary___video___cache_age',
  PrimaryVideoEmbedUrl = 'primary___video___embed_url',
  PrimaryVideoHtml = 'primary___video___html',
  PrimaryVideoName = 'primary___video___name',
  PrimaryVideoProviderName = 'primary___video___provider_name',
  PrimaryVideoProviderUrl = 'primary___video___provider_url',
  PrimaryVideoThumbnailHeight = 'primary___video___thumbnail_height',
  PrimaryVideoThumbnailUrl = 'primary___video___thumbnail_url',
  PrimaryVideoThumbnailWidth = 'primary___video___thumbnail_width',
  PrimaryVideoTitle = 'primary___video___title',
  PrimaryVideoType = 'primary___video___type',
  PrimaryVideoVersion = 'primary___video___version',
  PrimaryVideoUrl = 'primary___video___url',
  PrimaryVideoWidth = 'primary___video___width',
  PrimaryVideoHeight = 'primary___video___height',
  PrimaryVideoMediaId = 'primary___video___media_id',
  PrimaryVideoDescription = 'primary___video___description',
  PrimaryPosterAlt = 'primary___poster___alt',
  PrimaryPosterCopyright = 'primary___poster___copyright',
  PrimaryPosterDimensionsWidth = 'primary___poster___dimensions___width',
  PrimaryPosterDimensionsHeight = 'primary___poster___dimensions___height',
  PrimaryPosterUrl = 'primary___poster___url',
  PrimaryPosterFixedBase64 = 'primary___poster___fixed___base64',
  PrimaryPosterFixedSrc = 'primary___poster___fixed___src',
  PrimaryPosterFixedSrcSet = 'primary___poster___fixed___srcSet',
  PrimaryPosterFixedSrcWebp = 'primary___poster___fixed___srcWebp',
  PrimaryPosterFixedSrcSetWebp = 'primary___poster___fixed___srcSetWebp',
  PrimaryPosterFixedSizes = 'primary___poster___fixed___sizes',
  PrimaryPosterFixedWidth = 'primary___poster___fixed___width',
  PrimaryPosterFixedHeight = 'primary___poster___fixed___height',
  PrimaryPosterFluidBase64 = 'primary___poster___fluid___base64',
  PrimaryPosterFluidSrc = 'primary___poster___fluid___src',
  PrimaryPosterFluidSrcSet = 'primary___poster___fluid___srcSet',
  PrimaryPosterFluidSrcWebp = 'primary___poster___fluid___srcWebp',
  PrimaryPosterFluidSrcSetWebp = 'primary___poster___fluid___srcSetWebp',
  PrimaryPosterFluidSizes = 'primary___poster___fluid___sizes',
  PrimaryPosterFluidAspectRatio = 'primary___poster___fluid___aspectRatio',
  PrimaryPosterLocalFileSourceInstanceName = 'primary___poster___localFile___sourceInstanceName',
  PrimaryPosterLocalFileAbsolutePath = 'primary___poster___localFile___absolutePath',
  PrimaryPosterLocalFileRelativePath = 'primary___poster___localFile___relativePath',
  PrimaryPosterLocalFileExtension = 'primary___poster___localFile___extension',
  PrimaryPosterLocalFileSize = 'primary___poster___localFile___size',
  PrimaryPosterLocalFilePrettySize = 'primary___poster___localFile___prettySize',
  PrimaryPosterLocalFileModifiedTime = 'primary___poster___localFile___modifiedTime',
  PrimaryPosterLocalFileAccessTime = 'primary___poster___localFile___accessTime',
  PrimaryPosterLocalFileChangeTime = 'primary___poster___localFile___changeTime',
  PrimaryPosterLocalFileBirthTime = 'primary___poster___localFile___birthTime',
  PrimaryPosterLocalFileRoot = 'primary___poster___localFile___root',
  PrimaryPosterLocalFileDir = 'primary___poster___localFile___dir',
  PrimaryPosterLocalFileBase = 'primary___poster___localFile___base',
  PrimaryPosterLocalFileExt = 'primary___poster___localFile___ext',
  PrimaryPosterLocalFileName = 'primary___poster___localFile___name',
  PrimaryPosterLocalFileRelativeDirectory = 'primary___poster___localFile___relativeDirectory',
  PrimaryPosterLocalFileDev = 'primary___poster___localFile___dev',
  PrimaryPosterLocalFileMode = 'primary___poster___localFile___mode',
  PrimaryPosterLocalFileNlink = 'primary___poster___localFile___nlink',
  PrimaryPosterLocalFileUid = 'primary___poster___localFile___uid',
  PrimaryPosterLocalFileGid = 'primary___poster___localFile___gid',
  PrimaryPosterLocalFileRdev = 'primary___poster___localFile___rdev',
  PrimaryPosterLocalFileIno = 'primary___poster___localFile___ino',
  PrimaryPosterLocalFileAtimeMs = 'primary___poster___localFile___atimeMs',
  PrimaryPosterLocalFileMtimeMs = 'primary___poster___localFile___mtimeMs',
  PrimaryPosterLocalFileCtimeMs = 'primary___poster___localFile___ctimeMs',
  PrimaryPosterLocalFileAtime = 'primary___poster___localFile___atime',
  PrimaryPosterLocalFileMtime = 'primary___poster___localFile___mtime',
  PrimaryPosterLocalFileCtime = 'primary___poster___localFile___ctime',
  PrimaryPosterLocalFileBirthtime = 'primary___poster___localFile___birthtime',
  PrimaryPosterLocalFileBirthtimeMs = 'primary___poster___localFile___birthtimeMs',
  PrimaryPosterLocalFileId = 'primary___poster___localFile___id',
  PrimaryPosterLocalFileChildren = 'primary___poster___localFile___children',
  PrimaryPosterThumbnails = 'primary___poster___thumbnails',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicInteriorPageBodyVideoFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicInteriorPageBodyVideoPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicInteriorPageBodyVideoGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageBodyVideoEdge>;
  nodes: Array<PrismicInteriorPageBodyVideo>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicInteriorPageBodyVideoPrimaryType = {
  video?: Maybe<PrismicEmbedType>;
  poster?: Maybe<PrismicImageType>;
};

export type PrismicInteriorPageBodyVideoPrimaryTypeFilterInput = {
  video?: Maybe<PrismicEmbedTypeFilterInput>;
  poster?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicInteriorPageBodyVideoSortInput = {
  fields?: Maybe<Array<Maybe<PrismicInteriorPageBodyVideoFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicInteriorPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageEdge>;
  nodes: Array<PrismicInteriorPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicInteriorPageGroupConnection>;
};


export type PrismicInteriorPageConnectionDistinctArgs = {
  field: PrismicInteriorPageFieldsEnum;
};


export type PrismicInteriorPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicInteriorPageFieldsEnum;
};

export type PrismicInteriorPageDataType = {
  title?: Maybe<PrismicStructuredTextType>;
  meta_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  parent?: Maybe<PrismicLinkType>;
  redirect_to?: Maybe<PrismicLinkType>;
  redirect_is_permanent?: Maybe<Scalars['Boolean']>;
  header?: Maybe<Array<Maybe<PrismicInteriorPageHeaderSlicesType>>>;
  body?: Maybe<Array<Maybe<PrismicInteriorPageBodySlicesType>>>;
};

export type PrismicInteriorPageDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<PrismicLinkTypeFilterInput>;
  redirect_to?: Maybe<PrismicLinkTypeFilterInput>;
  redirect_is_permanent?: Maybe<BooleanQueryOperatorInput>;
};

export type PrismicInteriorPageEdge = {
  next?: Maybe<PrismicInteriorPage>;
  node: PrismicInteriorPage;
  previous?: Maybe<PrismicInteriorPage>;
};

export enum PrismicInteriorPageFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataMetaTitle = 'data___meta_title',
  DataMetaDescription = 'data___meta_description',
  DataParentLinkType = 'data___parent___link_type',
  DataParentIsBroken = 'data___parent___isBroken',
  DataParentUrl = 'data___parent___url',
  DataParentTarget = 'data___parent___target',
  DataParentSize = 'data___parent___size',
  DataParentId = 'data___parent___id',
  DataParentType = 'data___parent___type',
  DataParentTags = 'data___parent___tags',
  DataParentLang = 'data___parent___lang',
  DataParentSlug = 'data___parent___slug',
  DataParentUid = 'data___parent___uid',
  DataParentRaw = 'data___parent___raw',
  DataRedirectToLinkType = 'data___redirect_to___link_type',
  DataRedirectToIsBroken = 'data___redirect_to___isBroken',
  DataRedirectToUrl = 'data___redirect_to___url',
  DataRedirectToTarget = 'data___redirect_to___target',
  DataRedirectToSize = 'data___redirect_to___size',
  DataRedirectToId = 'data___redirect_to___id',
  DataRedirectToType = 'data___redirect_to___type',
  DataRedirectToTags = 'data___redirect_to___tags',
  DataRedirectToLang = 'data___redirect_to___lang',
  DataRedirectToSlug = 'data___redirect_to___slug',
  DataRedirectToUid = 'data___redirect_to___uid',
  DataRedirectToRaw = 'data___redirect_to___raw',
  DataRedirectIsPermanent = 'data___redirect_is_permanent',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicInteriorPageFilterInput = {
  data?: Maybe<PrismicInteriorPageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicInteriorPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageEdge>;
  nodes: Array<PrismicInteriorPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicInteriorPageHeaderHeroImage = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicInteriorPageHeaderHeroImagePrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicInteriorPageHeaderHeroImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageHeaderHeroImageEdge>;
  nodes: Array<PrismicInteriorPageHeaderHeroImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicInteriorPageHeaderHeroImageGroupConnection>;
};


export type PrismicInteriorPageHeaderHeroImageConnectionDistinctArgs = {
  field: PrismicInteriorPageHeaderHeroImageFieldsEnum;
};


export type PrismicInteriorPageHeaderHeroImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicInteriorPageHeaderHeroImageFieldsEnum;
};

export type PrismicInteriorPageHeaderHeroImageEdge = {
  next?: Maybe<PrismicInteriorPageHeaderHeroImage>;
  node: PrismicInteriorPageHeaderHeroImage;
  previous?: Maybe<PrismicInteriorPageHeaderHeroImage>;
};

export enum PrismicInteriorPageHeaderHeroImageFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryHeadingHtml = 'primary___heading___html',
  PrimaryHeadingText = 'primary___heading___text',
  PrimaryHeadingRaw = 'primary___heading___raw',
  PrimaryBackgroundImageAlt = 'primary___background_image___alt',
  PrimaryBackgroundImageCopyright = 'primary___background_image___copyright',
  PrimaryBackgroundImageDimensionsWidth = 'primary___background_image___dimensions___width',
  PrimaryBackgroundImageDimensionsHeight = 'primary___background_image___dimensions___height',
  PrimaryBackgroundImageUrl = 'primary___background_image___url',
  PrimaryBackgroundImageFixedBase64 = 'primary___background_image___fixed___base64',
  PrimaryBackgroundImageFixedSrc = 'primary___background_image___fixed___src',
  PrimaryBackgroundImageFixedSrcSet = 'primary___background_image___fixed___srcSet',
  PrimaryBackgroundImageFixedSrcWebp = 'primary___background_image___fixed___srcWebp',
  PrimaryBackgroundImageFixedSrcSetWebp = 'primary___background_image___fixed___srcSetWebp',
  PrimaryBackgroundImageFixedSizes = 'primary___background_image___fixed___sizes',
  PrimaryBackgroundImageFixedWidth = 'primary___background_image___fixed___width',
  PrimaryBackgroundImageFixedHeight = 'primary___background_image___fixed___height',
  PrimaryBackgroundImageFluidBase64 = 'primary___background_image___fluid___base64',
  PrimaryBackgroundImageFluidSrc = 'primary___background_image___fluid___src',
  PrimaryBackgroundImageFluidSrcSet = 'primary___background_image___fluid___srcSet',
  PrimaryBackgroundImageFluidSrcWebp = 'primary___background_image___fluid___srcWebp',
  PrimaryBackgroundImageFluidSrcSetWebp = 'primary___background_image___fluid___srcSetWebp',
  PrimaryBackgroundImageFluidSizes = 'primary___background_image___fluid___sizes',
  PrimaryBackgroundImageFluidAspectRatio = 'primary___background_image___fluid___aspectRatio',
  PrimaryBackgroundImageLocalFileSourceInstanceName = 'primary___background_image___localFile___sourceInstanceName',
  PrimaryBackgroundImageLocalFileAbsolutePath = 'primary___background_image___localFile___absolutePath',
  PrimaryBackgroundImageLocalFileRelativePath = 'primary___background_image___localFile___relativePath',
  PrimaryBackgroundImageLocalFileExtension = 'primary___background_image___localFile___extension',
  PrimaryBackgroundImageLocalFileSize = 'primary___background_image___localFile___size',
  PrimaryBackgroundImageLocalFilePrettySize = 'primary___background_image___localFile___prettySize',
  PrimaryBackgroundImageLocalFileModifiedTime = 'primary___background_image___localFile___modifiedTime',
  PrimaryBackgroundImageLocalFileAccessTime = 'primary___background_image___localFile___accessTime',
  PrimaryBackgroundImageLocalFileChangeTime = 'primary___background_image___localFile___changeTime',
  PrimaryBackgroundImageLocalFileBirthTime = 'primary___background_image___localFile___birthTime',
  PrimaryBackgroundImageLocalFileRoot = 'primary___background_image___localFile___root',
  PrimaryBackgroundImageLocalFileDir = 'primary___background_image___localFile___dir',
  PrimaryBackgroundImageLocalFileBase = 'primary___background_image___localFile___base',
  PrimaryBackgroundImageLocalFileExt = 'primary___background_image___localFile___ext',
  PrimaryBackgroundImageLocalFileName = 'primary___background_image___localFile___name',
  PrimaryBackgroundImageLocalFileRelativeDirectory = 'primary___background_image___localFile___relativeDirectory',
  PrimaryBackgroundImageLocalFileDev = 'primary___background_image___localFile___dev',
  PrimaryBackgroundImageLocalFileMode = 'primary___background_image___localFile___mode',
  PrimaryBackgroundImageLocalFileNlink = 'primary___background_image___localFile___nlink',
  PrimaryBackgroundImageLocalFileUid = 'primary___background_image___localFile___uid',
  PrimaryBackgroundImageLocalFileGid = 'primary___background_image___localFile___gid',
  PrimaryBackgroundImageLocalFileRdev = 'primary___background_image___localFile___rdev',
  PrimaryBackgroundImageLocalFileIno = 'primary___background_image___localFile___ino',
  PrimaryBackgroundImageLocalFileAtimeMs = 'primary___background_image___localFile___atimeMs',
  PrimaryBackgroundImageLocalFileMtimeMs = 'primary___background_image___localFile___mtimeMs',
  PrimaryBackgroundImageLocalFileCtimeMs = 'primary___background_image___localFile___ctimeMs',
  PrimaryBackgroundImageLocalFileAtime = 'primary___background_image___localFile___atime',
  PrimaryBackgroundImageLocalFileMtime = 'primary___background_image___localFile___mtime',
  PrimaryBackgroundImageLocalFileCtime = 'primary___background_image___localFile___ctime',
  PrimaryBackgroundImageLocalFileBirthtime = 'primary___background_image___localFile___birthtime',
  PrimaryBackgroundImageLocalFileBirthtimeMs = 'primary___background_image___localFile___birthtimeMs',
  PrimaryBackgroundImageLocalFileId = 'primary___background_image___localFile___id',
  PrimaryBackgroundImageLocalFileChildren = 'primary___background_image___localFile___children',
  PrimaryBackgroundImageThumbnails = 'primary___background_image___thumbnails',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicInteriorPageHeaderHeroImageFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicInteriorPageHeaderHeroImagePrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicInteriorPageHeaderHeroImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicInteriorPageHeaderHeroImageEdge>;
  nodes: Array<PrismicInteriorPageHeaderHeroImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicInteriorPageHeaderHeroImagePrimaryType = {
  heading?: Maybe<PrismicStructuredTextType>;
  background_image?: Maybe<PrismicImageType>;
};

export type PrismicInteriorPageHeaderHeroImagePrimaryTypeFilterInput = {
  heading?: Maybe<PrismicStructuredTextTypeFilterInput>;
  background_image?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicInteriorPageHeaderHeroImageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicInteriorPageHeaderHeroImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicInteriorPageHeaderSlicesType = PrismicInteriorPageHeaderHeroImage;

export type PrismicInteriorPageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicInteriorPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Link to web, media, and internal content. */
export type PrismicLinkType = {
  /** The type of link. */
  link_type: PrismicLinkTypes;
  /** If a Document link, `true` if linked document does not exist, `false` otherwise. */
  isBroken?: Maybe<Scalars['Boolean']>;
  /** The document's URL derived via the link resolver. */
  url?: Maybe<Scalars['String']>;
  /** The link's target. */
  target?: Maybe<Scalars['String']>;
  /** If a Media link, the size of the file. */
  size?: Maybe<Scalars['Int']>;
  /** If a Document link, the linked document's Prismic ID. */
  id?: Maybe<Scalars['ID']>;
  /** If a Document link, the linked document's Prismic custom type API ID */
  type?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's list of tags. */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** If a Document link, the linked document's language. */
  lang?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's slug. */
  slug?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's UID. */
  uid?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document. */
  document?: Maybe<PrismicAllDocumentTypes>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>;
};

export type PrismicLinkTypeFilterInput = {
  link_type?: Maybe<PrismicLinkTypesQueryOperatorInput>;
  isBroken?: Maybe<BooleanQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<IdQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type PrismicLinkTypeFilterListInput = {
  elemMatch?: Maybe<PrismicLinkTypeFilterInput>;
};

/** Types of links. */
export enum PrismicLinkTypes {
  /** Any of the other types */
  Any = 'Any',
  /** Internal content */
  Document = 'Document',
  /** Internal media content */
  Media = 'Media',
  /** URL */
  Web = 'Web'
}

export type PrismicLinkTypesQueryOperatorInput = {
  eq?: Maybe<PrismicLinkTypes>;
  ne?: Maybe<PrismicLinkTypes>;
  in?: Maybe<Array<Maybe<PrismicLinkTypes>>>;
  nin?: Maybe<Array<Maybe<PrismicLinkTypes>>>;
};

export type PrismicNavigation = PrismicDocument & Node & {
  data?: Maybe<PrismicNavigationDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicNavigationFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicNavigationLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicNavigationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNavigationEdge>;
  nodes: Array<PrismicNavigation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicNavigationGroupConnection>;
};


export type PrismicNavigationConnectionDistinctArgs = {
  field: PrismicNavigationFieldsEnum;
};


export type PrismicNavigationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicNavigationFieldsEnum;
};

export type PrismicNavigationDataType = {
  title?: Maybe<PrismicStructuredTextType>;
  main?: Maybe<Array<Maybe<PrismicNavigationMainSlicesType>>>;
};

export type PrismicNavigationDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicNavigationEdge = {
  next?: Maybe<PrismicNavigation>;
  node: PrismicNavigation;
  previous?: Maybe<PrismicNavigation>;
};

export enum PrismicNavigationFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicNavigationFilterInput = {
  data?: Maybe<PrismicNavigationDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicNavigationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNavigationEdge>;
  nodes: Array<PrismicNavigation>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicNavigationMainNavItem = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicNavigationMainNavItemPrimaryType>;
  items?: Maybe<Array<Maybe<PrismicNavigationMainNavItemItemType>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicNavigationMainNavItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNavigationMainNavItemEdge>;
  nodes: Array<PrismicNavigationMainNavItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicNavigationMainNavItemGroupConnection>;
};


export type PrismicNavigationMainNavItemConnectionDistinctArgs = {
  field: PrismicNavigationMainNavItemFieldsEnum;
};


export type PrismicNavigationMainNavItemConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicNavigationMainNavItemFieldsEnum;
};

export type PrismicNavigationMainNavItemEdge = {
  next?: Maybe<PrismicNavigationMainNavItem>;
  node: PrismicNavigationMainNavItem;
  previous?: Maybe<PrismicNavigationMainNavItem>;
};

export enum PrismicNavigationMainNavItemFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryName = 'primary___name',
  PrimaryLinkLinkType = 'primary___link___link_type',
  PrimaryLinkIsBroken = 'primary___link___isBroken',
  PrimaryLinkUrl = 'primary___link___url',
  PrimaryLinkTarget = 'primary___link___target',
  PrimaryLinkSize = 'primary___link___size',
  PrimaryLinkId = 'primary___link___id',
  PrimaryLinkType = 'primary___link___type',
  PrimaryLinkTags = 'primary___link___tags',
  PrimaryLinkLang = 'primary___link___lang',
  PrimaryLinkSlug = 'primary___link___slug',
  PrimaryLinkUid = 'primary___link___uid',
  PrimaryLinkRaw = 'primary___link___raw',
  Items = 'items',
  ItemsName = 'items___name',
  ItemsLinkLinkType = 'items___link___link_type',
  ItemsLinkIsBroken = 'items___link___isBroken',
  ItemsLinkUrl = 'items___link___url',
  ItemsLinkTarget = 'items___link___target',
  ItemsLinkSize = 'items___link___size',
  ItemsLinkId = 'items___link___id',
  ItemsLinkType = 'items___link___type',
  ItemsLinkTags = 'items___link___tags',
  ItemsLinkLang = 'items___link___lang',
  ItemsLinkSlug = 'items___link___slug',
  ItemsLinkUid = 'items___link___uid',
  ItemsLinkRaw = 'items___link___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicNavigationMainNavItemFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicNavigationMainNavItemPrimaryTypeFilterInput>;
  items?: Maybe<PrismicNavigationMainNavItemItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicNavigationMainNavItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNavigationMainNavItemEdge>;
  nodes: Array<PrismicNavigationMainNavItem>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicNavigationMainNavItemItemType = {
  name?: Maybe<Scalars['String']>;
  link?: Maybe<PrismicLinkType>;
};

export type PrismicNavigationMainNavItemItemTypeFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicNavigationMainNavItemItemTypeFilterListInput = {
  elemMatch?: Maybe<PrismicNavigationMainNavItemItemTypeFilterInput>;
};

export type PrismicNavigationMainNavItemPrimaryType = {
  name?: Maybe<Scalars['String']>;
  link?: Maybe<PrismicLinkType>;
};

export type PrismicNavigationMainNavItemPrimaryTypeFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicNavigationMainNavItemSortInput = {
  fields?: Maybe<Array<Maybe<PrismicNavigationMainNavItemFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicNavigationMainSlicesType = PrismicNavigationMainNavItem;

export type PrismicNavigationSortInput = {
  fields?: Maybe<Array<Maybe<PrismicNavigationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicNewsCategory = PrismicDocument & Node & {
  data?: Maybe<PrismicNewsCategoryDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicNewsCategoryFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicNewsCategoryLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicNewsCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsCategoryEdge>;
  nodes: Array<PrismicNewsCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicNewsCategoryGroupConnection>;
};


export type PrismicNewsCategoryConnectionDistinctArgs = {
  field: PrismicNewsCategoryFieldsEnum;
};


export type PrismicNewsCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicNewsCategoryFieldsEnum;
};

export type PrismicNewsCategoryDataType = {
  name?: Maybe<PrismicStructuredTextType>;
};

export type PrismicNewsCategoryDataTypeFilterInput = {
  name?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicNewsCategoryEdge = {
  next?: Maybe<PrismicNewsCategory>;
  node: PrismicNewsCategory;
  previous?: Maybe<PrismicNewsCategory>;
};

export enum PrismicNewsCategoryFieldsEnum {
  DataNameHtml = 'data___name___html',
  DataNameText = 'data___name___text',
  DataNameRaw = 'data___name___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicNewsCategoryFilterInput = {
  data?: Maybe<PrismicNewsCategoryDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicNewsCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsCategoryEdge>;
  nodes: Array<PrismicNewsCategory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicNewsCategorySortInput = {
  fields?: Maybe<Array<Maybe<PrismicNewsCategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicNewsPost = PrismicDocument & Node & {
  data?: Maybe<PrismicNewsPostDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicNewsPostFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicNewsPostLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicNewsPostBodyAnchor = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicNewsPostBodyAnchorPrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicNewsPostBodyAnchorConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostBodyAnchorEdge>;
  nodes: Array<PrismicNewsPostBodyAnchor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicNewsPostBodyAnchorGroupConnection>;
};


export type PrismicNewsPostBodyAnchorConnectionDistinctArgs = {
  field: PrismicNewsPostBodyAnchorFieldsEnum;
};


export type PrismicNewsPostBodyAnchorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicNewsPostBodyAnchorFieldsEnum;
};

export type PrismicNewsPostBodyAnchorEdge = {
  next?: Maybe<PrismicNewsPostBodyAnchor>;
  node: PrismicNewsPostBodyAnchor;
  previous?: Maybe<PrismicNewsPostBodyAnchor>;
};

export enum PrismicNewsPostBodyAnchorFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryId = 'primary___id',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicNewsPostBodyAnchorFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicNewsPostBodyAnchorPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicNewsPostBodyAnchorGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostBodyAnchorEdge>;
  nodes: Array<PrismicNewsPostBodyAnchor>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicNewsPostBodyAnchorPrimaryType = {
  id?: Maybe<Scalars['String']>;
};

export type PrismicNewsPostBodyAnchorPrimaryTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
};

export type PrismicNewsPostBodyAnchorSortInput = {
  fields?: Maybe<Array<Maybe<PrismicNewsPostBodyAnchorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicNewsPostBodyDivider = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicNewsPostBodyDividerConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostBodyDividerEdge>;
  nodes: Array<PrismicNewsPostBodyDivider>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicNewsPostBodyDividerGroupConnection>;
};


export type PrismicNewsPostBodyDividerConnectionDistinctArgs = {
  field: PrismicNewsPostBodyDividerFieldsEnum;
};


export type PrismicNewsPostBodyDividerConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicNewsPostBodyDividerFieldsEnum;
};

export type PrismicNewsPostBodyDividerEdge = {
  next?: Maybe<PrismicNewsPostBodyDivider>;
  node: PrismicNewsPostBodyDivider;
  previous?: Maybe<PrismicNewsPostBodyDivider>;
};

export enum PrismicNewsPostBodyDividerFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicNewsPostBodyDividerFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicNewsPostBodyDividerGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostBodyDividerEdge>;
  nodes: Array<PrismicNewsPostBodyDivider>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicNewsPostBodyDividerSortInput = {
  fields?: Maybe<Array<Maybe<PrismicNewsPostBodyDividerFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicNewsPostBodyImages = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<PrismicNewsPostBodyImagesItemType>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicNewsPostBodyImagesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostBodyImagesEdge>;
  nodes: Array<PrismicNewsPostBodyImages>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicNewsPostBodyImagesGroupConnection>;
};


export type PrismicNewsPostBodyImagesConnectionDistinctArgs = {
  field: PrismicNewsPostBodyImagesFieldsEnum;
};


export type PrismicNewsPostBodyImagesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicNewsPostBodyImagesFieldsEnum;
};

export type PrismicNewsPostBodyImagesEdge = {
  next?: Maybe<PrismicNewsPostBodyImages>;
  node: PrismicNewsPostBodyImages;
  previous?: Maybe<PrismicNewsPostBodyImages>;
};

export enum PrismicNewsPostBodyImagesFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  Items = 'items',
  ItemsImageAlt = 'items___image___alt',
  ItemsImageCopyright = 'items___image___copyright',
  ItemsImageDimensionsWidth = 'items___image___dimensions___width',
  ItemsImageDimensionsHeight = 'items___image___dimensions___height',
  ItemsImageUrl = 'items___image___url',
  ItemsImageFixedBase64 = 'items___image___fixed___base64',
  ItemsImageFixedSrc = 'items___image___fixed___src',
  ItemsImageFixedSrcSet = 'items___image___fixed___srcSet',
  ItemsImageFixedSrcWebp = 'items___image___fixed___srcWebp',
  ItemsImageFixedSrcSetWebp = 'items___image___fixed___srcSetWebp',
  ItemsImageFixedSizes = 'items___image___fixed___sizes',
  ItemsImageFixedWidth = 'items___image___fixed___width',
  ItemsImageFixedHeight = 'items___image___fixed___height',
  ItemsImageFluidBase64 = 'items___image___fluid___base64',
  ItemsImageFluidSrc = 'items___image___fluid___src',
  ItemsImageFluidSrcSet = 'items___image___fluid___srcSet',
  ItemsImageFluidSrcWebp = 'items___image___fluid___srcWebp',
  ItemsImageFluidSrcSetWebp = 'items___image___fluid___srcSetWebp',
  ItemsImageFluidSizes = 'items___image___fluid___sizes',
  ItemsImageFluidAspectRatio = 'items___image___fluid___aspectRatio',
  ItemsImageLocalFileSourceInstanceName = 'items___image___localFile___sourceInstanceName',
  ItemsImageLocalFileAbsolutePath = 'items___image___localFile___absolutePath',
  ItemsImageLocalFileRelativePath = 'items___image___localFile___relativePath',
  ItemsImageLocalFileExtension = 'items___image___localFile___extension',
  ItemsImageLocalFileSize = 'items___image___localFile___size',
  ItemsImageLocalFilePrettySize = 'items___image___localFile___prettySize',
  ItemsImageLocalFileModifiedTime = 'items___image___localFile___modifiedTime',
  ItemsImageLocalFileAccessTime = 'items___image___localFile___accessTime',
  ItemsImageLocalFileChangeTime = 'items___image___localFile___changeTime',
  ItemsImageLocalFileBirthTime = 'items___image___localFile___birthTime',
  ItemsImageLocalFileRoot = 'items___image___localFile___root',
  ItemsImageLocalFileDir = 'items___image___localFile___dir',
  ItemsImageLocalFileBase = 'items___image___localFile___base',
  ItemsImageLocalFileExt = 'items___image___localFile___ext',
  ItemsImageLocalFileName = 'items___image___localFile___name',
  ItemsImageLocalFileRelativeDirectory = 'items___image___localFile___relativeDirectory',
  ItemsImageLocalFileDev = 'items___image___localFile___dev',
  ItemsImageLocalFileMode = 'items___image___localFile___mode',
  ItemsImageLocalFileNlink = 'items___image___localFile___nlink',
  ItemsImageLocalFileUid = 'items___image___localFile___uid',
  ItemsImageLocalFileGid = 'items___image___localFile___gid',
  ItemsImageLocalFileRdev = 'items___image___localFile___rdev',
  ItemsImageLocalFileIno = 'items___image___localFile___ino',
  ItemsImageLocalFileAtimeMs = 'items___image___localFile___atimeMs',
  ItemsImageLocalFileMtimeMs = 'items___image___localFile___mtimeMs',
  ItemsImageLocalFileCtimeMs = 'items___image___localFile___ctimeMs',
  ItemsImageLocalFileAtime = 'items___image___localFile___atime',
  ItemsImageLocalFileMtime = 'items___image___localFile___mtime',
  ItemsImageLocalFileCtime = 'items___image___localFile___ctime',
  ItemsImageLocalFileBirthtime = 'items___image___localFile___birthtime',
  ItemsImageLocalFileBirthtimeMs = 'items___image___localFile___birthtimeMs',
  ItemsImageLocalFileId = 'items___image___localFile___id',
  ItemsImageLocalFileChildren = 'items___image___localFile___children',
  ItemsImageThumbnails = 'items___image___thumbnails',
  ItemsCaptionHtml = 'items___caption___html',
  ItemsCaptionText = 'items___caption___text',
  ItemsCaptionRaw = 'items___caption___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicNewsPostBodyImagesFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  items?: Maybe<PrismicNewsPostBodyImagesItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicNewsPostBodyImagesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostBodyImagesEdge>;
  nodes: Array<PrismicNewsPostBodyImages>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicNewsPostBodyImagesItemType = {
  image?: Maybe<PrismicImageType>;
  caption?: Maybe<PrismicStructuredTextType>;
};

export type PrismicNewsPostBodyImagesItemTypeFilterInput = {
  image?: Maybe<PrismicImageTypeFilterInput>;
  caption?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicNewsPostBodyImagesItemTypeFilterListInput = {
  elemMatch?: Maybe<PrismicNewsPostBodyImagesItemTypeFilterInput>;
};

export type PrismicNewsPostBodyImagesSortInput = {
  fields?: Maybe<Array<Maybe<PrismicNewsPostBodyImagesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicNewsPostBodyLinkCard = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicNewsPostBodyLinkCardPrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicNewsPostBodyLinkCardConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostBodyLinkCardEdge>;
  nodes: Array<PrismicNewsPostBodyLinkCard>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicNewsPostBodyLinkCardGroupConnection>;
};


export type PrismicNewsPostBodyLinkCardConnectionDistinctArgs = {
  field: PrismicNewsPostBodyLinkCardFieldsEnum;
};


export type PrismicNewsPostBodyLinkCardConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicNewsPostBodyLinkCardFieldsEnum;
};

export type PrismicNewsPostBodyLinkCardEdge = {
  next?: Maybe<PrismicNewsPostBodyLinkCard>;
  node: PrismicNewsPostBodyLinkCard;
  previous?: Maybe<PrismicNewsPostBodyLinkCard>;
};

export enum PrismicNewsPostBodyLinkCardFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryLinkTitleHtml = 'primary___link_title___html',
  PrimaryLinkTitleText = 'primary___link_title___text',
  PrimaryLinkTitleRaw = 'primary___link_title___raw',
  PrimaryLinkLinkType = 'primary___link___link_type',
  PrimaryLinkIsBroken = 'primary___link___isBroken',
  PrimaryLinkUrl = 'primary___link___url',
  PrimaryLinkTarget = 'primary___link___target',
  PrimaryLinkSize = 'primary___link___size',
  PrimaryLinkId = 'primary___link___id',
  PrimaryLinkType = 'primary___link___type',
  PrimaryLinkTags = 'primary___link___tags',
  PrimaryLinkLang = 'primary___link___lang',
  PrimaryLinkSlug = 'primary___link___slug',
  PrimaryLinkUid = 'primary___link___uid',
  PrimaryLinkRaw = 'primary___link___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicNewsPostBodyLinkCardFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicNewsPostBodyLinkCardPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicNewsPostBodyLinkCardGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostBodyLinkCardEdge>;
  nodes: Array<PrismicNewsPostBodyLinkCard>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicNewsPostBodyLinkCardPrimaryType = {
  link_title?: Maybe<PrismicStructuredTextType>;
  link?: Maybe<PrismicLinkType>;
};

export type PrismicNewsPostBodyLinkCardPrimaryTypeFilterInput = {
  link_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  link?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicNewsPostBodyLinkCardSortInput = {
  fields?: Maybe<Array<Maybe<PrismicNewsPostBodyLinkCardFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicNewsPostBodySlicesType = PrismicNewsPostBodyText | PrismicNewsPostBodyImages | PrismicNewsPostBodyVideo | PrismicNewsPostBodyTextIntro | PrismicNewsPostBodyAnchor | PrismicNewsPostBodyDivider | PrismicNewsPostBodyLinkCard;

export type PrismicNewsPostBodyText = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicNewsPostBodyTextPrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicNewsPostBodyTextConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostBodyTextEdge>;
  nodes: Array<PrismicNewsPostBodyText>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicNewsPostBodyTextGroupConnection>;
};


export type PrismicNewsPostBodyTextConnectionDistinctArgs = {
  field: PrismicNewsPostBodyTextFieldsEnum;
};


export type PrismicNewsPostBodyTextConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicNewsPostBodyTextFieldsEnum;
};

export type PrismicNewsPostBodyTextEdge = {
  next?: Maybe<PrismicNewsPostBodyText>;
  node: PrismicNewsPostBodyText;
  previous?: Maybe<PrismicNewsPostBodyText>;
};

export enum PrismicNewsPostBodyTextFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryTextHtml = 'primary___text___html',
  PrimaryTextText = 'primary___text___text',
  PrimaryTextRaw = 'primary___text___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicNewsPostBodyTextFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicNewsPostBodyTextPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicNewsPostBodyTextGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostBodyTextEdge>;
  nodes: Array<PrismicNewsPostBodyText>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicNewsPostBodyTextIntro = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicNewsPostBodyTextIntroPrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicNewsPostBodyTextIntroConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostBodyTextIntroEdge>;
  nodes: Array<PrismicNewsPostBodyTextIntro>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicNewsPostBodyTextIntroGroupConnection>;
};


export type PrismicNewsPostBodyTextIntroConnectionDistinctArgs = {
  field: PrismicNewsPostBodyTextIntroFieldsEnum;
};


export type PrismicNewsPostBodyTextIntroConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicNewsPostBodyTextIntroFieldsEnum;
};

export type PrismicNewsPostBodyTextIntroEdge = {
  next?: Maybe<PrismicNewsPostBodyTextIntro>;
  node: PrismicNewsPostBodyTextIntro;
  previous?: Maybe<PrismicNewsPostBodyTextIntro>;
};

export enum PrismicNewsPostBodyTextIntroFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryIntroductoryTextHtml = 'primary___introductory_text___html',
  PrimaryIntroductoryTextText = 'primary___introductory_text___text',
  PrimaryIntroductoryTextRaw = 'primary___introductory_text___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicNewsPostBodyTextIntroFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicNewsPostBodyTextIntroPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicNewsPostBodyTextIntroGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostBodyTextIntroEdge>;
  nodes: Array<PrismicNewsPostBodyTextIntro>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicNewsPostBodyTextIntroPrimaryType = {
  introductory_text?: Maybe<PrismicStructuredTextType>;
};

export type PrismicNewsPostBodyTextIntroPrimaryTypeFilterInput = {
  introductory_text?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicNewsPostBodyTextIntroSortInput = {
  fields?: Maybe<Array<Maybe<PrismicNewsPostBodyTextIntroFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicNewsPostBodyTextPrimaryType = {
  text?: Maybe<PrismicStructuredTextType>;
};

export type PrismicNewsPostBodyTextPrimaryTypeFilterInput = {
  text?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicNewsPostBodyTextSortInput = {
  fields?: Maybe<Array<Maybe<PrismicNewsPostBodyTextFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicNewsPostBodyVideo = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicNewsPostBodyVideoPrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicNewsPostBodyVideoConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostBodyVideoEdge>;
  nodes: Array<PrismicNewsPostBodyVideo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicNewsPostBodyVideoGroupConnection>;
};


export type PrismicNewsPostBodyVideoConnectionDistinctArgs = {
  field: PrismicNewsPostBodyVideoFieldsEnum;
};


export type PrismicNewsPostBodyVideoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicNewsPostBodyVideoFieldsEnum;
};

export type PrismicNewsPostBodyVideoEdge = {
  next?: Maybe<PrismicNewsPostBodyVideo>;
  node: PrismicNewsPostBodyVideo;
  previous?: Maybe<PrismicNewsPostBodyVideo>;
};

export enum PrismicNewsPostBodyVideoFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryVideoAuthorId = 'primary___video___author_id',
  PrimaryVideoAuthorName = 'primary___video___author_name',
  PrimaryVideoAuthorUrl = 'primary___video___author_url',
  PrimaryVideoCacheAge = 'primary___video___cache_age',
  PrimaryVideoEmbedUrl = 'primary___video___embed_url',
  PrimaryVideoHtml = 'primary___video___html',
  PrimaryVideoName = 'primary___video___name',
  PrimaryVideoProviderName = 'primary___video___provider_name',
  PrimaryVideoProviderUrl = 'primary___video___provider_url',
  PrimaryVideoThumbnailHeight = 'primary___video___thumbnail_height',
  PrimaryVideoThumbnailUrl = 'primary___video___thumbnail_url',
  PrimaryVideoThumbnailWidth = 'primary___video___thumbnail_width',
  PrimaryVideoTitle = 'primary___video___title',
  PrimaryVideoType = 'primary___video___type',
  PrimaryVideoVersion = 'primary___video___version',
  PrimaryVideoUrl = 'primary___video___url',
  PrimaryVideoWidth = 'primary___video___width',
  PrimaryVideoHeight = 'primary___video___height',
  PrimaryVideoMediaId = 'primary___video___media_id',
  PrimaryVideoDescription = 'primary___video___description',
  PrimaryPosterAlt = 'primary___poster___alt',
  PrimaryPosterCopyright = 'primary___poster___copyright',
  PrimaryPosterDimensionsWidth = 'primary___poster___dimensions___width',
  PrimaryPosterDimensionsHeight = 'primary___poster___dimensions___height',
  PrimaryPosterUrl = 'primary___poster___url',
  PrimaryPosterFixedBase64 = 'primary___poster___fixed___base64',
  PrimaryPosterFixedSrc = 'primary___poster___fixed___src',
  PrimaryPosterFixedSrcSet = 'primary___poster___fixed___srcSet',
  PrimaryPosterFixedSrcWebp = 'primary___poster___fixed___srcWebp',
  PrimaryPosterFixedSrcSetWebp = 'primary___poster___fixed___srcSetWebp',
  PrimaryPosterFixedSizes = 'primary___poster___fixed___sizes',
  PrimaryPosterFixedWidth = 'primary___poster___fixed___width',
  PrimaryPosterFixedHeight = 'primary___poster___fixed___height',
  PrimaryPosterFluidBase64 = 'primary___poster___fluid___base64',
  PrimaryPosterFluidSrc = 'primary___poster___fluid___src',
  PrimaryPosterFluidSrcSet = 'primary___poster___fluid___srcSet',
  PrimaryPosterFluidSrcWebp = 'primary___poster___fluid___srcWebp',
  PrimaryPosterFluidSrcSetWebp = 'primary___poster___fluid___srcSetWebp',
  PrimaryPosterFluidSizes = 'primary___poster___fluid___sizes',
  PrimaryPosterFluidAspectRatio = 'primary___poster___fluid___aspectRatio',
  PrimaryPosterLocalFileSourceInstanceName = 'primary___poster___localFile___sourceInstanceName',
  PrimaryPosterLocalFileAbsolutePath = 'primary___poster___localFile___absolutePath',
  PrimaryPosterLocalFileRelativePath = 'primary___poster___localFile___relativePath',
  PrimaryPosterLocalFileExtension = 'primary___poster___localFile___extension',
  PrimaryPosterLocalFileSize = 'primary___poster___localFile___size',
  PrimaryPosterLocalFilePrettySize = 'primary___poster___localFile___prettySize',
  PrimaryPosterLocalFileModifiedTime = 'primary___poster___localFile___modifiedTime',
  PrimaryPosterLocalFileAccessTime = 'primary___poster___localFile___accessTime',
  PrimaryPosterLocalFileChangeTime = 'primary___poster___localFile___changeTime',
  PrimaryPosterLocalFileBirthTime = 'primary___poster___localFile___birthTime',
  PrimaryPosterLocalFileRoot = 'primary___poster___localFile___root',
  PrimaryPosterLocalFileDir = 'primary___poster___localFile___dir',
  PrimaryPosterLocalFileBase = 'primary___poster___localFile___base',
  PrimaryPosterLocalFileExt = 'primary___poster___localFile___ext',
  PrimaryPosterLocalFileName = 'primary___poster___localFile___name',
  PrimaryPosterLocalFileRelativeDirectory = 'primary___poster___localFile___relativeDirectory',
  PrimaryPosterLocalFileDev = 'primary___poster___localFile___dev',
  PrimaryPosterLocalFileMode = 'primary___poster___localFile___mode',
  PrimaryPosterLocalFileNlink = 'primary___poster___localFile___nlink',
  PrimaryPosterLocalFileUid = 'primary___poster___localFile___uid',
  PrimaryPosterLocalFileGid = 'primary___poster___localFile___gid',
  PrimaryPosterLocalFileRdev = 'primary___poster___localFile___rdev',
  PrimaryPosterLocalFileIno = 'primary___poster___localFile___ino',
  PrimaryPosterLocalFileAtimeMs = 'primary___poster___localFile___atimeMs',
  PrimaryPosterLocalFileMtimeMs = 'primary___poster___localFile___mtimeMs',
  PrimaryPosterLocalFileCtimeMs = 'primary___poster___localFile___ctimeMs',
  PrimaryPosterLocalFileAtime = 'primary___poster___localFile___atime',
  PrimaryPosterLocalFileMtime = 'primary___poster___localFile___mtime',
  PrimaryPosterLocalFileCtime = 'primary___poster___localFile___ctime',
  PrimaryPosterLocalFileBirthtime = 'primary___poster___localFile___birthtime',
  PrimaryPosterLocalFileBirthtimeMs = 'primary___poster___localFile___birthtimeMs',
  PrimaryPosterLocalFileId = 'primary___poster___localFile___id',
  PrimaryPosterLocalFileChildren = 'primary___poster___localFile___children',
  PrimaryPosterThumbnails = 'primary___poster___thumbnails',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicNewsPostBodyVideoFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicNewsPostBodyVideoPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicNewsPostBodyVideoGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostBodyVideoEdge>;
  nodes: Array<PrismicNewsPostBodyVideo>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicNewsPostBodyVideoPrimaryType = {
  video?: Maybe<PrismicEmbedType>;
  poster?: Maybe<PrismicImageType>;
};

export type PrismicNewsPostBodyVideoPrimaryTypeFilterInput = {
  video?: Maybe<PrismicEmbedTypeFilterInput>;
  poster?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicNewsPostBodyVideoSortInput = {
  fields?: Maybe<Array<Maybe<PrismicNewsPostBodyVideoFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicNewsPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostEdge>;
  nodes: Array<PrismicNewsPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicNewsPostGroupConnection>;
};


export type PrismicNewsPostConnectionDistinctArgs = {
  field: PrismicNewsPostFieldsEnum;
};


export type PrismicNewsPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicNewsPostFieldsEnum;
};

export type PrismicNewsPostDataType = {
  title?: Maybe<PrismicStructuredTextType>;
  published_at?: Maybe<Scalars['Date']>;
  excerpt?: Maybe<PrismicStructuredTextType>;
  news_categories?: Maybe<Array<Maybe<PrismicNewsPostNewsCategoriesGroupType>>>;
  related_links?: Maybe<Array<Maybe<PrismicNewsPostRelatedLinksGroupType>>>;
  featured_image?: Maybe<PrismicImageType>;
  body?: Maybe<Array<Maybe<PrismicNewsPostBodySlicesType>>>;
};


export type PrismicNewsPostDataTypePublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicNewsPostDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  excerpt?: Maybe<PrismicStructuredTextTypeFilterInput>;
  news_categories?: Maybe<PrismicNewsPostNewsCategoriesGroupTypeFilterListInput>;
  related_links?: Maybe<PrismicNewsPostRelatedLinksGroupTypeFilterListInput>;
  featured_image?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicNewsPostEdge = {
  next?: Maybe<PrismicNewsPost>;
  node: PrismicNewsPost;
  previous?: Maybe<PrismicNewsPost>;
};

export enum PrismicNewsPostFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataPublishedAt = 'data___published_at',
  DataExcerptHtml = 'data___excerpt___html',
  DataExcerptText = 'data___excerpt___text',
  DataExcerptRaw = 'data___excerpt___raw',
  DataNewsCategories = 'data___news_categories',
  DataNewsCategoriesNewsCategoryLinkType = 'data___news_categories___news_category___link_type',
  DataNewsCategoriesNewsCategoryIsBroken = 'data___news_categories___news_category___isBroken',
  DataNewsCategoriesNewsCategoryUrl = 'data___news_categories___news_category___url',
  DataNewsCategoriesNewsCategoryTarget = 'data___news_categories___news_category___target',
  DataNewsCategoriesNewsCategorySize = 'data___news_categories___news_category___size',
  DataNewsCategoriesNewsCategoryId = 'data___news_categories___news_category___id',
  DataNewsCategoriesNewsCategoryType = 'data___news_categories___news_category___type',
  DataNewsCategoriesNewsCategoryTags = 'data___news_categories___news_category___tags',
  DataNewsCategoriesNewsCategoryLang = 'data___news_categories___news_category___lang',
  DataNewsCategoriesNewsCategorySlug = 'data___news_categories___news_category___slug',
  DataNewsCategoriesNewsCategoryUid = 'data___news_categories___news_category___uid',
  DataNewsCategoriesNewsCategoryRaw = 'data___news_categories___news_category___raw',
  DataRelatedLinks = 'data___related_links',
  DataRelatedLinksRelatedLinkLinkType = 'data___related_links___related_link___link_type',
  DataRelatedLinksRelatedLinkIsBroken = 'data___related_links___related_link___isBroken',
  DataRelatedLinksRelatedLinkUrl = 'data___related_links___related_link___url',
  DataRelatedLinksRelatedLinkTarget = 'data___related_links___related_link___target',
  DataRelatedLinksRelatedLinkSize = 'data___related_links___related_link___size',
  DataRelatedLinksRelatedLinkId = 'data___related_links___related_link___id',
  DataRelatedLinksRelatedLinkType = 'data___related_links___related_link___type',
  DataRelatedLinksRelatedLinkTags = 'data___related_links___related_link___tags',
  DataRelatedLinksRelatedLinkLang = 'data___related_links___related_link___lang',
  DataRelatedLinksRelatedLinkSlug = 'data___related_links___related_link___slug',
  DataRelatedLinksRelatedLinkUid = 'data___related_links___related_link___uid',
  DataRelatedLinksRelatedLinkRaw = 'data___related_links___related_link___raw',
  DataFeaturedImageAlt = 'data___featured_image___alt',
  DataFeaturedImageCopyright = 'data___featured_image___copyright',
  DataFeaturedImageDimensionsWidth = 'data___featured_image___dimensions___width',
  DataFeaturedImageDimensionsHeight = 'data___featured_image___dimensions___height',
  DataFeaturedImageUrl = 'data___featured_image___url',
  DataFeaturedImageFixedBase64 = 'data___featured_image___fixed___base64',
  DataFeaturedImageFixedSrc = 'data___featured_image___fixed___src',
  DataFeaturedImageFixedSrcSet = 'data___featured_image___fixed___srcSet',
  DataFeaturedImageFixedSrcWebp = 'data___featured_image___fixed___srcWebp',
  DataFeaturedImageFixedSrcSetWebp = 'data___featured_image___fixed___srcSetWebp',
  DataFeaturedImageFixedSizes = 'data___featured_image___fixed___sizes',
  DataFeaturedImageFixedWidth = 'data___featured_image___fixed___width',
  DataFeaturedImageFixedHeight = 'data___featured_image___fixed___height',
  DataFeaturedImageFluidBase64 = 'data___featured_image___fluid___base64',
  DataFeaturedImageFluidSrc = 'data___featured_image___fluid___src',
  DataFeaturedImageFluidSrcSet = 'data___featured_image___fluid___srcSet',
  DataFeaturedImageFluidSrcWebp = 'data___featured_image___fluid___srcWebp',
  DataFeaturedImageFluidSrcSetWebp = 'data___featured_image___fluid___srcSetWebp',
  DataFeaturedImageFluidSizes = 'data___featured_image___fluid___sizes',
  DataFeaturedImageFluidAspectRatio = 'data___featured_image___fluid___aspectRatio',
  DataFeaturedImageLocalFileSourceInstanceName = 'data___featured_image___localFile___sourceInstanceName',
  DataFeaturedImageLocalFileAbsolutePath = 'data___featured_image___localFile___absolutePath',
  DataFeaturedImageLocalFileRelativePath = 'data___featured_image___localFile___relativePath',
  DataFeaturedImageLocalFileExtension = 'data___featured_image___localFile___extension',
  DataFeaturedImageLocalFileSize = 'data___featured_image___localFile___size',
  DataFeaturedImageLocalFilePrettySize = 'data___featured_image___localFile___prettySize',
  DataFeaturedImageLocalFileModifiedTime = 'data___featured_image___localFile___modifiedTime',
  DataFeaturedImageLocalFileAccessTime = 'data___featured_image___localFile___accessTime',
  DataFeaturedImageLocalFileChangeTime = 'data___featured_image___localFile___changeTime',
  DataFeaturedImageLocalFileBirthTime = 'data___featured_image___localFile___birthTime',
  DataFeaturedImageLocalFileRoot = 'data___featured_image___localFile___root',
  DataFeaturedImageLocalFileDir = 'data___featured_image___localFile___dir',
  DataFeaturedImageLocalFileBase = 'data___featured_image___localFile___base',
  DataFeaturedImageLocalFileExt = 'data___featured_image___localFile___ext',
  DataFeaturedImageLocalFileName = 'data___featured_image___localFile___name',
  DataFeaturedImageLocalFileRelativeDirectory = 'data___featured_image___localFile___relativeDirectory',
  DataFeaturedImageLocalFileDev = 'data___featured_image___localFile___dev',
  DataFeaturedImageLocalFileMode = 'data___featured_image___localFile___mode',
  DataFeaturedImageLocalFileNlink = 'data___featured_image___localFile___nlink',
  DataFeaturedImageLocalFileUid = 'data___featured_image___localFile___uid',
  DataFeaturedImageLocalFileGid = 'data___featured_image___localFile___gid',
  DataFeaturedImageLocalFileRdev = 'data___featured_image___localFile___rdev',
  DataFeaturedImageLocalFileIno = 'data___featured_image___localFile___ino',
  DataFeaturedImageLocalFileAtimeMs = 'data___featured_image___localFile___atimeMs',
  DataFeaturedImageLocalFileMtimeMs = 'data___featured_image___localFile___mtimeMs',
  DataFeaturedImageLocalFileCtimeMs = 'data___featured_image___localFile___ctimeMs',
  DataFeaturedImageLocalFileAtime = 'data___featured_image___localFile___atime',
  DataFeaturedImageLocalFileMtime = 'data___featured_image___localFile___mtime',
  DataFeaturedImageLocalFileCtime = 'data___featured_image___localFile___ctime',
  DataFeaturedImageLocalFileBirthtime = 'data___featured_image___localFile___birthtime',
  DataFeaturedImageLocalFileBirthtimeMs = 'data___featured_image___localFile___birthtimeMs',
  DataFeaturedImageLocalFileId = 'data___featured_image___localFile___id',
  DataFeaturedImageLocalFileChildren = 'data___featured_image___localFile___children',
  DataFeaturedImageThumbnails = 'data___featured_image___thumbnails',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicNewsPostFilterInput = {
  data?: Maybe<PrismicNewsPostDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicNewsPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicNewsPostEdge>;
  nodes: Array<PrismicNewsPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicNewsPostNewsCategoriesGroupType = {
  news_category?: Maybe<PrismicLinkType>;
};

export type PrismicNewsPostNewsCategoriesGroupTypeFilterInput = {
  news_category?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicNewsPostNewsCategoriesGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicNewsPostNewsCategoriesGroupTypeFilterInput>;
};

export type PrismicNewsPostRelatedLinksGroupType = {
  related_link?: Maybe<PrismicLinkType>;
};

export type PrismicNewsPostRelatedLinksGroupTypeFilterInput = {
  related_link?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicNewsPostRelatedLinksGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicNewsPostRelatedLinksGroupTypeFilterInput>;
};

export type PrismicNewsPostSortInput = {
  fields?: Maybe<Array<Maybe<PrismicNewsPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPage = PrismicDocument & Node & {
  data?: Maybe<PrismicPageDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicPageFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicPageLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyAnchor = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicPageBodyAnchorPrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicPageBodyAnchorConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyAnchorEdge>;
  nodes: Array<PrismicPageBodyAnchor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageBodyAnchorGroupConnection>;
};


export type PrismicPageBodyAnchorConnectionDistinctArgs = {
  field: PrismicPageBodyAnchorFieldsEnum;
};


export type PrismicPageBodyAnchorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageBodyAnchorFieldsEnum;
};

export type PrismicPageBodyAnchorEdge = {
  next?: Maybe<PrismicPageBodyAnchor>;
  node: PrismicPageBodyAnchor;
  previous?: Maybe<PrismicPageBodyAnchor>;
};

export enum PrismicPageBodyAnchorFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryId = 'primary___id',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicPageBodyAnchorFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyAnchorPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageBodyAnchorGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyAnchorEdge>;
  nodes: Array<PrismicPageBodyAnchor>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyAnchorPrimaryType = {
  id?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyAnchorPrimaryTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
};

export type PrismicPageBodyAnchorSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyAnchorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPageBodyFellowsGrid = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicPageBodyFellowsGridConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyFellowsGridEdge>;
  nodes: Array<PrismicPageBodyFellowsGrid>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageBodyFellowsGridGroupConnection>;
};


export type PrismicPageBodyFellowsGridConnectionDistinctArgs = {
  field: PrismicPageBodyFellowsGridFieldsEnum;
};


export type PrismicPageBodyFellowsGridConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageBodyFellowsGridFieldsEnum;
};

export type PrismicPageBodyFellowsGridEdge = {
  next?: Maybe<PrismicPageBodyFellowsGrid>;
  node: PrismicPageBodyFellowsGrid;
  previous?: Maybe<PrismicPageBodyFellowsGrid>;
};

export enum PrismicPageBodyFellowsGridFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicPageBodyFellowsGridFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageBodyFellowsGridGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyFellowsGridEdge>;
  nodes: Array<PrismicPageBodyFellowsGrid>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyFellowsGridSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyFellowsGridFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPageBodyHeroImage = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicPageBodyHeroImagePrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicPageBodyHeroImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyHeroImageEdge>;
  nodes: Array<PrismicPageBodyHeroImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageBodyHeroImageGroupConnection>;
};


export type PrismicPageBodyHeroImageConnectionDistinctArgs = {
  field: PrismicPageBodyHeroImageFieldsEnum;
};


export type PrismicPageBodyHeroImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageBodyHeroImageFieldsEnum;
};

export type PrismicPageBodyHeroImageEdge = {
  next?: Maybe<PrismicPageBodyHeroImage>;
  node: PrismicPageBodyHeroImage;
  previous?: Maybe<PrismicPageBodyHeroImage>;
};

export enum PrismicPageBodyHeroImageFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryTextHtml = 'primary___text___html',
  PrimaryTextText = 'primary___text___text',
  PrimaryTextRaw = 'primary___text___raw',
  PrimaryButtonTextHtml = 'primary___button_text___html',
  PrimaryButtonTextText = 'primary___button_text___text',
  PrimaryButtonTextRaw = 'primary___button_text___raw',
  PrimaryButtonLinkLinkType = 'primary___button_link___link_type',
  PrimaryButtonLinkIsBroken = 'primary___button_link___isBroken',
  PrimaryButtonLinkUrl = 'primary___button_link___url',
  PrimaryButtonLinkTarget = 'primary___button_link___target',
  PrimaryButtonLinkSize = 'primary___button_link___size',
  PrimaryButtonLinkId = 'primary___button_link___id',
  PrimaryButtonLinkType = 'primary___button_link___type',
  PrimaryButtonLinkTags = 'primary___button_link___tags',
  PrimaryButtonLinkLang = 'primary___button_link___lang',
  PrimaryButtonLinkSlug = 'primary___button_link___slug',
  PrimaryButtonLinkUid = 'primary___button_link___uid',
  PrimaryButtonLinkRaw = 'primary___button_link___raw',
  PrimaryBackgroundImageAlt = 'primary___background_image___alt',
  PrimaryBackgroundImageCopyright = 'primary___background_image___copyright',
  PrimaryBackgroundImageDimensionsWidth = 'primary___background_image___dimensions___width',
  PrimaryBackgroundImageDimensionsHeight = 'primary___background_image___dimensions___height',
  PrimaryBackgroundImageUrl = 'primary___background_image___url',
  PrimaryBackgroundImageFixedBase64 = 'primary___background_image___fixed___base64',
  PrimaryBackgroundImageFixedSrc = 'primary___background_image___fixed___src',
  PrimaryBackgroundImageFixedSrcSet = 'primary___background_image___fixed___srcSet',
  PrimaryBackgroundImageFixedSrcWebp = 'primary___background_image___fixed___srcWebp',
  PrimaryBackgroundImageFixedSrcSetWebp = 'primary___background_image___fixed___srcSetWebp',
  PrimaryBackgroundImageFixedSizes = 'primary___background_image___fixed___sizes',
  PrimaryBackgroundImageFixedWidth = 'primary___background_image___fixed___width',
  PrimaryBackgroundImageFixedHeight = 'primary___background_image___fixed___height',
  PrimaryBackgroundImageFluidBase64 = 'primary___background_image___fluid___base64',
  PrimaryBackgroundImageFluidSrc = 'primary___background_image___fluid___src',
  PrimaryBackgroundImageFluidSrcSet = 'primary___background_image___fluid___srcSet',
  PrimaryBackgroundImageFluidSrcWebp = 'primary___background_image___fluid___srcWebp',
  PrimaryBackgroundImageFluidSrcSetWebp = 'primary___background_image___fluid___srcSetWebp',
  PrimaryBackgroundImageFluidSizes = 'primary___background_image___fluid___sizes',
  PrimaryBackgroundImageFluidAspectRatio = 'primary___background_image___fluid___aspectRatio',
  PrimaryBackgroundImageLocalFileSourceInstanceName = 'primary___background_image___localFile___sourceInstanceName',
  PrimaryBackgroundImageLocalFileAbsolutePath = 'primary___background_image___localFile___absolutePath',
  PrimaryBackgroundImageLocalFileRelativePath = 'primary___background_image___localFile___relativePath',
  PrimaryBackgroundImageLocalFileExtension = 'primary___background_image___localFile___extension',
  PrimaryBackgroundImageLocalFileSize = 'primary___background_image___localFile___size',
  PrimaryBackgroundImageLocalFilePrettySize = 'primary___background_image___localFile___prettySize',
  PrimaryBackgroundImageLocalFileModifiedTime = 'primary___background_image___localFile___modifiedTime',
  PrimaryBackgroundImageLocalFileAccessTime = 'primary___background_image___localFile___accessTime',
  PrimaryBackgroundImageLocalFileChangeTime = 'primary___background_image___localFile___changeTime',
  PrimaryBackgroundImageLocalFileBirthTime = 'primary___background_image___localFile___birthTime',
  PrimaryBackgroundImageLocalFileRoot = 'primary___background_image___localFile___root',
  PrimaryBackgroundImageLocalFileDir = 'primary___background_image___localFile___dir',
  PrimaryBackgroundImageLocalFileBase = 'primary___background_image___localFile___base',
  PrimaryBackgroundImageLocalFileExt = 'primary___background_image___localFile___ext',
  PrimaryBackgroundImageLocalFileName = 'primary___background_image___localFile___name',
  PrimaryBackgroundImageLocalFileRelativeDirectory = 'primary___background_image___localFile___relativeDirectory',
  PrimaryBackgroundImageLocalFileDev = 'primary___background_image___localFile___dev',
  PrimaryBackgroundImageLocalFileMode = 'primary___background_image___localFile___mode',
  PrimaryBackgroundImageLocalFileNlink = 'primary___background_image___localFile___nlink',
  PrimaryBackgroundImageLocalFileUid = 'primary___background_image___localFile___uid',
  PrimaryBackgroundImageLocalFileGid = 'primary___background_image___localFile___gid',
  PrimaryBackgroundImageLocalFileRdev = 'primary___background_image___localFile___rdev',
  PrimaryBackgroundImageLocalFileIno = 'primary___background_image___localFile___ino',
  PrimaryBackgroundImageLocalFileAtimeMs = 'primary___background_image___localFile___atimeMs',
  PrimaryBackgroundImageLocalFileMtimeMs = 'primary___background_image___localFile___mtimeMs',
  PrimaryBackgroundImageLocalFileCtimeMs = 'primary___background_image___localFile___ctimeMs',
  PrimaryBackgroundImageLocalFileAtime = 'primary___background_image___localFile___atime',
  PrimaryBackgroundImageLocalFileMtime = 'primary___background_image___localFile___mtime',
  PrimaryBackgroundImageLocalFileCtime = 'primary___background_image___localFile___ctime',
  PrimaryBackgroundImageLocalFileBirthtime = 'primary___background_image___localFile___birthtime',
  PrimaryBackgroundImageLocalFileBirthtimeMs = 'primary___background_image___localFile___birthtimeMs',
  PrimaryBackgroundImageLocalFileId = 'primary___background_image___localFile___id',
  PrimaryBackgroundImageLocalFileChildren = 'primary___background_image___localFile___children',
  PrimaryBackgroundImageThumbnails = 'primary___background_image___thumbnails',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicPageBodyHeroImageFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyHeroImagePrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageBodyHeroImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyHeroImageEdge>;
  nodes: Array<PrismicPageBodyHeroImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyHeroImagePrimaryType = {
  text?: Maybe<PrismicStructuredTextType>;
  button_text?: Maybe<PrismicStructuredTextType>;
  button_link?: Maybe<PrismicLinkType>;
  background_image?: Maybe<PrismicImageType>;
};

export type PrismicPageBodyHeroImagePrimaryTypeFilterInput = {
  text?: Maybe<PrismicStructuredTextTypeFilterInput>;
  button_text?: Maybe<PrismicStructuredTextTypeFilterInput>;
  button_link?: Maybe<PrismicLinkTypeFilterInput>;
  background_image?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicPageBodyHeroImageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyHeroImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPageBodyImages = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<PrismicPageBodyImagesItemType>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicPageBodyImagesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyImagesEdge>;
  nodes: Array<PrismicPageBodyImages>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageBodyImagesGroupConnection>;
};


export type PrismicPageBodyImagesConnectionDistinctArgs = {
  field: PrismicPageBodyImagesFieldsEnum;
};


export type PrismicPageBodyImagesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageBodyImagesFieldsEnum;
};

export type PrismicPageBodyImagesEdge = {
  next?: Maybe<PrismicPageBodyImages>;
  node: PrismicPageBodyImages;
  previous?: Maybe<PrismicPageBodyImages>;
};

export enum PrismicPageBodyImagesFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  Items = 'items',
  ItemsImageAlt = 'items___image___alt',
  ItemsImageCopyright = 'items___image___copyright',
  ItemsImageDimensionsWidth = 'items___image___dimensions___width',
  ItemsImageDimensionsHeight = 'items___image___dimensions___height',
  ItemsImageUrl = 'items___image___url',
  ItemsImageFixedBase64 = 'items___image___fixed___base64',
  ItemsImageFixedSrc = 'items___image___fixed___src',
  ItemsImageFixedSrcSet = 'items___image___fixed___srcSet',
  ItemsImageFixedSrcWebp = 'items___image___fixed___srcWebp',
  ItemsImageFixedSrcSetWebp = 'items___image___fixed___srcSetWebp',
  ItemsImageFixedSizes = 'items___image___fixed___sizes',
  ItemsImageFixedWidth = 'items___image___fixed___width',
  ItemsImageFixedHeight = 'items___image___fixed___height',
  ItemsImageFluidBase64 = 'items___image___fluid___base64',
  ItemsImageFluidSrc = 'items___image___fluid___src',
  ItemsImageFluidSrcSet = 'items___image___fluid___srcSet',
  ItemsImageFluidSrcWebp = 'items___image___fluid___srcWebp',
  ItemsImageFluidSrcSetWebp = 'items___image___fluid___srcSetWebp',
  ItemsImageFluidSizes = 'items___image___fluid___sizes',
  ItemsImageFluidAspectRatio = 'items___image___fluid___aspectRatio',
  ItemsImageLocalFileSourceInstanceName = 'items___image___localFile___sourceInstanceName',
  ItemsImageLocalFileAbsolutePath = 'items___image___localFile___absolutePath',
  ItemsImageLocalFileRelativePath = 'items___image___localFile___relativePath',
  ItemsImageLocalFileExtension = 'items___image___localFile___extension',
  ItemsImageLocalFileSize = 'items___image___localFile___size',
  ItemsImageLocalFilePrettySize = 'items___image___localFile___prettySize',
  ItemsImageLocalFileModifiedTime = 'items___image___localFile___modifiedTime',
  ItemsImageLocalFileAccessTime = 'items___image___localFile___accessTime',
  ItemsImageLocalFileChangeTime = 'items___image___localFile___changeTime',
  ItemsImageLocalFileBirthTime = 'items___image___localFile___birthTime',
  ItemsImageLocalFileRoot = 'items___image___localFile___root',
  ItemsImageLocalFileDir = 'items___image___localFile___dir',
  ItemsImageLocalFileBase = 'items___image___localFile___base',
  ItemsImageLocalFileExt = 'items___image___localFile___ext',
  ItemsImageLocalFileName = 'items___image___localFile___name',
  ItemsImageLocalFileRelativeDirectory = 'items___image___localFile___relativeDirectory',
  ItemsImageLocalFileDev = 'items___image___localFile___dev',
  ItemsImageLocalFileMode = 'items___image___localFile___mode',
  ItemsImageLocalFileNlink = 'items___image___localFile___nlink',
  ItemsImageLocalFileUid = 'items___image___localFile___uid',
  ItemsImageLocalFileGid = 'items___image___localFile___gid',
  ItemsImageLocalFileRdev = 'items___image___localFile___rdev',
  ItemsImageLocalFileIno = 'items___image___localFile___ino',
  ItemsImageLocalFileAtimeMs = 'items___image___localFile___atimeMs',
  ItemsImageLocalFileMtimeMs = 'items___image___localFile___mtimeMs',
  ItemsImageLocalFileCtimeMs = 'items___image___localFile___ctimeMs',
  ItemsImageLocalFileAtime = 'items___image___localFile___atime',
  ItemsImageLocalFileMtime = 'items___image___localFile___mtime',
  ItemsImageLocalFileCtime = 'items___image___localFile___ctime',
  ItemsImageLocalFileBirthtime = 'items___image___localFile___birthtime',
  ItemsImageLocalFileBirthtimeMs = 'items___image___localFile___birthtimeMs',
  ItemsImageLocalFileId = 'items___image___localFile___id',
  ItemsImageLocalFileChildren = 'items___image___localFile___children',
  ItemsImageThumbnails = 'items___image___thumbnails',
  ItemsCaptionHtml = 'items___caption___html',
  ItemsCaptionText = 'items___caption___text',
  ItemsCaptionRaw = 'items___caption___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicPageBodyImagesFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  items?: Maybe<PrismicPageBodyImagesItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageBodyImagesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyImagesEdge>;
  nodes: Array<PrismicPageBodyImages>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyImagesItemType = {
  image?: Maybe<PrismicImageType>;
  caption?: Maybe<PrismicStructuredTextType>;
};

export type PrismicPageBodyImagesItemTypeFilterInput = {
  image?: Maybe<PrismicImageTypeFilterInput>;
  caption?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicPageBodyImagesItemTypeFilterListInput = {
  elemMatch?: Maybe<PrismicPageBodyImagesItemTypeFilterInput>;
};

export type PrismicPageBodyImagesSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyImagesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPageBodyLearningExcursionMap = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicPageBodyLearningExcursionMapPrimaryType>;
  items?: Maybe<Array<Maybe<PrismicPageBodyLearningExcursionMapItemType>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicPageBodyLearningExcursionMapConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyLearningExcursionMapEdge>;
  nodes: Array<PrismicPageBodyLearningExcursionMap>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageBodyLearningExcursionMapGroupConnection>;
};


export type PrismicPageBodyLearningExcursionMapConnectionDistinctArgs = {
  field: PrismicPageBodyLearningExcursionMapFieldsEnum;
};


export type PrismicPageBodyLearningExcursionMapConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageBodyLearningExcursionMapFieldsEnum;
};

export type PrismicPageBodyLearningExcursionMapEdge = {
  next?: Maybe<PrismicPageBodyLearningExcursionMap>;
  node: PrismicPageBodyLearningExcursionMap;
  previous?: Maybe<PrismicPageBodyLearningExcursionMap>;
};

export enum PrismicPageBodyLearningExcursionMapFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryTextHtml = 'primary___text___html',
  PrimaryTextText = 'primary___text___text',
  PrimaryTextRaw = 'primary___text___raw',
  PrimaryMapUrl = 'primary___map_url',
  Items = 'items',
  ItemsFellowPhotoAlt = 'items___fellow_photo___alt',
  ItemsFellowPhotoCopyright = 'items___fellow_photo___copyright',
  ItemsFellowPhotoDimensionsWidth = 'items___fellow_photo___dimensions___width',
  ItemsFellowPhotoDimensionsHeight = 'items___fellow_photo___dimensions___height',
  ItemsFellowPhotoUrl = 'items___fellow_photo___url',
  ItemsFellowPhotoFixedBase64 = 'items___fellow_photo___fixed___base64',
  ItemsFellowPhotoFixedSrc = 'items___fellow_photo___fixed___src',
  ItemsFellowPhotoFixedSrcSet = 'items___fellow_photo___fixed___srcSet',
  ItemsFellowPhotoFixedSrcWebp = 'items___fellow_photo___fixed___srcWebp',
  ItemsFellowPhotoFixedSrcSetWebp = 'items___fellow_photo___fixed___srcSetWebp',
  ItemsFellowPhotoFixedSizes = 'items___fellow_photo___fixed___sizes',
  ItemsFellowPhotoFixedWidth = 'items___fellow_photo___fixed___width',
  ItemsFellowPhotoFixedHeight = 'items___fellow_photo___fixed___height',
  ItemsFellowPhotoFluidBase64 = 'items___fellow_photo___fluid___base64',
  ItemsFellowPhotoFluidSrc = 'items___fellow_photo___fluid___src',
  ItemsFellowPhotoFluidSrcSet = 'items___fellow_photo___fluid___srcSet',
  ItemsFellowPhotoFluidSrcWebp = 'items___fellow_photo___fluid___srcWebp',
  ItemsFellowPhotoFluidSrcSetWebp = 'items___fellow_photo___fluid___srcSetWebp',
  ItemsFellowPhotoFluidSizes = 'items___fellow_photo___fluid___sizes',
  ItemsFellowPhotoFluidAspectRatio = 'items___fellow_photo___fluid___aspectRatio',
  ItemsFellowPhotoLocalFileSourceInstanceName = 'items___fellow_photo___localFile___sourceInstanceName',
  ItemsFellowPhotoLocalFileAbsolutePath = 'items___fellow_photo___localFile___absolutePath',
  ItemsFellowPhotoLocalFileRelativePath = 'items___fellow_photo___localFile___relativePath',
  ItemsFellowPhotoLocalFileExtension = 'items___fellow_photo___localFile___extension',
  ItemsFellowPhotoLocalFileSize = 'items___fellow_photo___localFile___size',
  ItemsFellowPhotoLocalFilePrettySize = 'items___fellow_photo___localFile___prettySize',
  ItemsFellowPhotoLocalFileModifiedTime = 'items___fellow_photo___localFile___modifiedTime',
  ItemsFellowPhotoLocalFileAccessTime = 'items___fellow_photo___localFile___accessTime',
  ItemsFellowPhotoLocalFileChangeTime = 'items___fellow_photo___localFile___changeTime',
  ItemsFellowPhotoLocalFileBirthTime = 'items___fellow_photo___localFile___birthTime',
  ItemsFellowPhotoLocalFileRoot = 'items___fellow_photo___localFile___root',
  ItemsFellowPhotoLocalFileDir = 'items___fellow_photo___localFile___dir',
  ItemsFellowPhotoLocalFileBase = 'items___fellow_photo___localFile___base',
  ItemsFellowPhotoLocalFileExt = 'items___fellow_photo___localFile___ext',
  ItemsFellowPhotoLocalFileName = 'items___fellow_photo___localFile___name',
  ItemsFellowPhotoLocalFileRelativeDirectory = 'items___fellow_photo___localFile___relativeDirectory',
  ItemsFellowPhotoLocalFileDev = 'items___fellow_photo___localFile___dev',
  ItemsFellowPhotoLocalFileMode = 'items___fellow_photo___localFile___mode',
  ItemsFellowPhotoLocalFileNlink = 'items___fellow_photo___localFile___nlink',
  ItemsFellowPhotoLocalFileUid = 'items___fellow_photo___localFile___uid',
  ItemsFellowPhotoLocalFileGid = 'items___fellow_photo___localFile___gid',
  ItemsFellowPhotoLocalFileRdev = 'items___fellow_photo___localFile___rdev',
  ItemsFellowPhotoLocalFileIno = 'items___fellow_photo___localFile___ino',
  ItemsFellowPhotoLocalFileAtimeMs = 'items___fellow_photo___localFile___atimeMs',
  ItemsFellowPhotoLocalFileMtimeMs = 'items___fellow_photo___localFile___mtimeMs',
  ItemsFellowPhotoLocalFileCtimeMs = 'items___fellow_photo___localFile___ctimeMs',
  ItemsFellowPhotoLocalFileAtime = 'items___fellow_photo___localFile___atime',
  ItemsFellowPhotoLocalFileMtime = 'items___fellow_photo___localFile___mtime',
  ItemsFellowPhotoLocalFileCtime = 'items___fellow_photo___localFile___ctime',
  ItemsFellowPhotoLocalFileBirthtime = 'items___fellow_photo___localFile___birthtime',
  ItemsFellowPhotoLocalFileBirthtimeMs = 'items___fellow_photo___localFile___birthtimeMs',
  ItemsFellowPhotoLocalFileId = 'items___fellow_photo___localFile___id',
  ItemsFellowPhotoLocalFileChildren = 'items___fellow_photo___localFile___children',
  ItemsFellowPhotoThumbnails = 'items___fellow_photo___thumbnails',
  ItemsFellowNameHtml = 'items___fellow_name___html',
  ItemsFellowNameText = 'items___fellow_name___text',
  ItemsFellowNameRaw = 'items___fellow_name___raw',
  ItemsVideoLinkLinkType = 'items___video_link___link_type',
  ItemsVideoLinkIsBroken = 'items___video_link___isBroken',
  ItemsVideoLinkUrl = 'items___video_link___url',
  ItemsVideoLinkTarget = 'items___video_link___target',
  ItemsVideoLinkSize = 'items___video_link___size',
  ItemsVideoLinkId = 'items___video_link___id',
  ItemsVideoLinkType = 'items___video_link___type',
  ItemsVideoLinkTags = 'items___video_link___tags',
  ItemsVideoLinkLang = 'items___video_link___lang',
  ItemsVideoLinkSlug = 'items___video_link___slug',
  ItemsVideoLinkUid = 'items___video_link___uid',
  ItemsVideoLinkRaw = 'items___video_link___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicPageBodyLearningExcursionMapFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyLearningExcursionMapPrimaryTypeFilterInput>;
  items?: Maybe<PrismicPageBodyLearningExcursionMapItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageBodyLearningExcursionMapGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyLearningExcursionMapEdge>;
  nodes: Array<PrismicPageBodyLearningExcursionMap>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyLearningExcursionMapItemType = {
  fellow_photo?: Maybe<PrismicImageType>;
  fellow_name?: Maybe<PrismicStructuredTextType>;
  video_link?: Maybe<PrismicLinkType>;
};

export type PrismicPageBodyLearningExcursionMapItemTypeFilterInput = {
  fellow_photo?: Maybe<PrismicImageTypeFilterInput>;
  fellow_name?: Maybe<PrismicStructuredTextTypeFilterInput>;
  video_link?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicPageBodyLearningExcursionMapItemTypeFilterListInput = {
  elemMatch?: Maybe<PrismicPageBodyLearningExcursionMapItemTypeFilterInput>;
};

export type PrismicPageBodyLearningExcursionMapPrimaryType = {
  text?: Maybe<PrismicStructuredTextType>;
  map_url?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyLearningExcursionMapPrimaryTypeFilterInput = {
  text?: Maybe<PrismicStructuredTextTypeFilterInput>;
  map_url?: Maybe<StringQueryOperatorInput>;
};

export type PrismicPageBodyLearningExcursionMapSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyLearningExcursionMapFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPageBodyQuoteSlideshow = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<PrismicPageBodyQuoteSlideshowItemType>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicPageBodyQuoteSlideshowConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyQuoteSlideshowEdge>;
  nodes: Array<PrismicPageBodyQuoteSlideshow>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageBodyQuoteSlideshowGroupConnection>;
};


export type PrismicPageBodyQuoteSlideshowConnectionDistinctArgs = {
  field: PrismicPageBodyQuoteSlideshowFieldsEnum;
};


export type PrismicPageBodyQuoteSlideshowConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageBodyQuoteSlideshowFieldsEnum;
};

export type PrismicPageBodyQuoteSlideshowEdge = {
  next?: Maybe<PrismicPageBodyQuoteSlideshow>;
  node: PrismicPageBodyQuoteSlideshow;
  previous?: Maybe<PrismicPageBodyQuoteSlideshow>;
};

export enum PrismicPageBodyQuoteSlideshowFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  Items = 'items',
  ItemsPhotoAlt = 'items___photo___alt',
  ItemsPhotoCopyright = 'items___photo___copyright',
  ItemsPhotoDimensionsWidth = 'items___photo___dimensions___width',
  ItemsPhotoDimensionsHeight = 'items___photo___dimensions___height',
  ItemsPhotoUrl = 'items___photo___url',
  ItemsPhotoFixedBase64 = 'items___photo___fixed___base64',
  ItemsPhotoFixedSrc = 'items___photo___fixed___src',
  ItemsPhotoFixedSrcSet = 'items___photo___fixed___srcSet',
  ItemsPhotoFixedSrcWebp = 'items___photo___fixed___srcWebp',
  ItemsPhotoFixedSrcSetWebp = 'items___photo___fixed___srcSetWebp',
  ItemsPhotoFixedSizes = 'items___photo___fixed___sizes',
  ItemsPhotoFixedWidth = 'items___photo___fixed___width',
  ItemsPhotoFixedHeight = 'items___photo___fixed___height',
  ItemsPhotoFluidBase64 = 'items___photo___fluid___base64',
  ItemsPhotoFluidSrc = 'items___photo___fluid___src',
  ItemsPhotoFluidSrcSet = 'items___photo___fluid___srcSet',
  ItemsPhotoFluidSrcWebp = 'items___photo___fluid___srcWebp',
  ItemsPhotoFluidSrcSetWebp = 'items___photo___fluid___srcSetWebp',
  ItemsPhotoFluidSizes = 'items___photo___fluid___sizes',
  ItemsPhotoFluidAspectRatio = 'items___photo___fluid___aspectRatio',
  ItemsPhotoLocalFileSourceInstanceName = 'items___photo___localFile___sourceInstanceName',
  ItemsPhotoLocalFileAbsolutePath = 'items___photo___localFile___absolutePath',
  ItemsPhotoLocalFileRelativePath = 'items___photo___localFile___relativePath',
  ItemsPhotoLocalFileExtension = 'items___photo___localFile___extension',
  ItemsPhotoLocalFileSize = 'items___photo___localFile___size',
  ItemsPhotoLocalFilePrettySize = 'items___photo___localFile___prettySize',
  ItemsPhotoLocalFileModifiedTime = 'items___photo___localFile___modifiedTime',
  ItemsPhotoLocalFileAccessTime = 'items___photo___localFile___accessTime',
  ItemsPhotoLocalFileChangeTime = 'items___photo___localFile___changeTime',
  ItemsPhotoLocalFileBirthTime = 'items___photo___localFile___birthTime',
  ItemsPhotoLocalFileRoot = 'items___photo___localFile___root',
  ItemsPhotoLocalFileDir = 'items___photo___localFile___dir',
  ItemsPhotoLocalFileBase = 'items___photo___localFile___base',
  ItemsPhotoLocalFileExt = 'items___photo___localFile___ext',
  ItemsPhotoLocalFileName = 'items___photo___localFile___name',
  ItemsPhotoLocalFileRelativeDirectory = 'items___photo___localFile___relativeDirectory',
  ItemsPhotoLocalFileDev = 'items___photo___localFile___dev',
  ItemsPhotoLocalFileMode = 'items___photo___localFile___mode',
  ItemsPhotoLocalFileNlink = 'items___photo___localFile___nlink',
  ItemsPhotoLocalFileUid = 'items___photo___localFile___uid',
  ItemsPhotoLocalFileGid = 'items___photo___localFile___gid',
  ItemsPhotoLocalFileRdev = 'items___photo___localFile___rdev',
  ItemsPhotoLocalFileIno = 'items___photo___localFile___ino',
  ItemsPhotoLocalFileAtimeMs = 'items___photo___localFile___atimeMs',
  ItemsPhotoLocalFileMtimeMs = 'items___photo___localFile___mtimeMs',
  ItemsPhotoLocalFileCtimeMs = 'items___photo___localFile___ctimeMs',
  ItemsPhotoLocalFileAtime = 'items___photo___localFile___atime',
  ItemsPhotoLocalFileMtime = 'items___photo___localFile___mtime',
  ItemsPhotoLocalFileCtime = 'items___photo___localFile___ctime',
  ItemsPhotoLocalFileBirthtime = 'items___photo___localFile___birthtime',
  ItemsPhotoLocalFileBirthtimeMs = 'items___photo___localFile___birthtimeMs',
  ItemsPhotoLocalFileId = 'items___photo___localFile___id',
  ItemsPhotoLocalFileChildren = 'items___photo___localFile___children',
  ItemsPhotoThumbnails = 'items___photo___thumbnails',
  ItemsQuoteHtml = 'items___quote___html',
  ItemsQuoteText = 'items___quote___text',
  ItemsQuoteRaw = 'items___quote___raw',
  ItemsQuoteeNameHtml = 'items___quotee_name___html',
  ItemsQuoteeNameText = 'items___quotee_name___text',
  ItemsQuoteeNameRaw = 'items___quotee_name___raw',
  ItemsQuoteeTitleHtml = 'items___quotee_title___html',
  ItemsQuoteeTitleText = 'items___quotee_title___text',
  ItemsQuoteeTitleRaw = 'items___quotee_title___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicPageBodyQuoteSlideshowFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  items?: Maybe<PrismicPageBodyQuoteSlideshowItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageBodyQuoteSlideshowGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyQuoteSlideshowEdge>;
  nodes: Array<PrismicPageBodyQuoteSlideshow>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyQuoteSlideshowItemType = {
  photo?: Maybe<PrismicImageType>;
  quote?: Maybe<PrismicStructuredTextType>;
  quotee_name?: Maybe<PrismicStructuredTextType>;
  quotee_title?: Maybe<PrismicStructuredTextType>;
};

export type PrismicPageBodyQuoteSlideshowItemTypeFilterInput = {
  photo?: Maybe<PrismicImageTypeFilterInput>;
  quote?: Maybe<PrismicStructuredTextTypeFilterInput>;
  quotee_name?: Maybe<PrismicStructuredTextTypeFilterInput>;
  quotee_title?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicPageBodyQuoteSlideshowItemTypeFilterListInput = {
  elemMatch?: Maybe<PrismicPageBodyQuoteSlideshowItemTypeFilterInput>;
};

export type PrismicPageBodyQuoteSlideshowSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyQuoteSlideshowFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPageBodySlicesType = PrismicPageBodyText | PrismicPageBodyImages | PrismicPageBodyAnchor | PrismicPageBodyHeroImage | PrismicPageBodyQuoteSlideshow | PrismicPageBodyLearningExcursionMap | PrismicPageBodyFellowsGrid;

export type PrismicPageBodyText = PrismicSliceType & Node & {
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicPageBodyTextPrimaryType>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicPageBodyTextConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyTextEdge>;
  nodes: Array<PrismicPageBodyText>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageBodyTextGroupConnection>;
};


export type PrismicPageBodyTextConnectionDistinctArgs = {
  field: PrismicPageBodyTextFieldsEnum;
};


export type PrismicPageBodyTextConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageBodyTextFieldsEnum;
};

export type PrismicPageBodyTextEdge = {
  next?: Maybe<PrismicPageBodyText>;
  node: PrismicPageBodyText;
  previous?: Maybe<PrismicPageBodyText>;
};

export enum PrismicPageBodyTextFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryTextHtml = 'primary___text___html',
  PrimaryTextText = 'primary___text___text',
  PrimaryTextRaw = 'primary___text___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicPageBodyTextFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyTextPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageBodyTextGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageBodyTextEdge>;
  nodes: Array<PrismicPageBodyText>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageBodyTextPrimaryType = {
  text?: Maybe<PrismicStructuredTextType>;
};

export type PrismicPageBodyTextPrimaryTypeFilterInput = {
  text?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicPageBodyTextSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyTextFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageEdge>;
  nodes: Array<PrismicPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageGroupConnection>;
};


export type PrismicPageConnectionDistinctArgs = {
  field: PrismicPageFieldsEnum;
};


export type PrismicPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageFieldsEnum;
};

export type PrismicPageDataType = {
  title?: Maybe<PrismicStructuredTextType>;
  meta_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  parent?: Maybe<PrismicLinkType>;
  redirect_to?: Maybe<PrismicLinkType>;
  redirect_is_permanent?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Array<Maybe<PrismicPageBodySlicesType>>>;
};

export type PrismicPageDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<PrismicLinkTypeFilterInput>;
  redirect_to?: Maybe<PrismicLinkTypeFilterInput>;
  redirect_is_permanent?: Maybe<BooleanQueryOperatorInput>;
};

export type PrismicPageEdge = {
  next?: Maybe<PrismicPage>;
  node: PrismicPage;
  previous?: Maybe<PrismicPage>;
};

export enum PrismicPageFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataMetaTitle = 'data___meta_title',
  DataMetaDescription = 'data___meta_description',
  DataParentLinkType = 'data___parent___link_type',
  DataParentIsBroken = 'data___parent___isBroken',
  DataParentUrl = 'data___parent___url',
  DataParentTarget = 'data___parent___target',
  DataParentSize = 'data___parent___size',
  DataParentId = 'data___parent___id',
  DataParentType = 'data___parent___type',
  DataParentTags = 'data___parent___tags',
  DataParentLang = 'data___parent___lang',
  DataParentSlug = 'data___parent___slug',
  DataParentUid = 'data___parent___uid',
  DataParentRaw = 'data___parent___raw',
  DataRedirectToLinkType = 'data___redirect_to___link_type',
  DataRedirectToIsBroken = 'data___redirect_to___isBroken',
  DataRedirectToUrl = 'data___redirect_to___url',
  DataRedirectToTarget = 'data___redirect_to___target',
  DataRedirectToSize = 'data___redirect_to___size',
  DataRedirectToId = 'data___redirect_to___id',
  DataRedirectToType = 'data___redirect_to___type',
  DataRedirectToTags = 'data___redirect_to___tags',
  DataRedirectToLang = 'data___redirect_to___lang',
  DataRedirectToSlug = 'data___redirect_to___slug',
  DataRedirectToUid = 'data___redirect_to___uid',
  DataRedirectToRaw = 'data___redirect_to___raw',
  DataRedirectIsPermanent = 'data___redirect_is_permanent',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicPageFilterInput = {
  data?: Maybe<PrismicPageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageEdge>;
  nodes: Array<PrismicPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicSettings = PrismicDocument & Node & {
  data?: Maybe<PrismicSettingsDataType>;
  dataRaw: Scalars['JSON'];
  dataString: Scalars['String'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  alternate_languages: Array<PrismicLinkType>;
  type: Scalars['String'];
  prismicId: Scalars['ID'];
  _previewable: Scalars['ID'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PrismicSettingsFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type PrismicSettingsLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicSettingsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicSettingsEdge>;
  nodes: Array<PrismicSettings>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicSettingsGroupConnection>;
};


export type PrismicSettingsConnectionDistinctArgs = {
  field: PrismicSettingsFieldsEnum;
};


export type PrismicSettingsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicSettingsFieldsEnum;
};

export type PrismicSettingsDataType = {
  title?: Maybe<PrismicStructuredTextType>;
  site_name?: Maybe<PrismicStructuredTextType>;
  site_description?: Maybe<PrismicStructuredTextType>;
  site_copyright?: Maybe<PrismicStructuredTextType>;
  facebook_handle?: Maybe<PrismicStructuredTextType>;
  linkedin_handle?: Maybe<PrismicStructuredTextType>;
  newsletter_sign_up_link?: Maybe<PrismicLinkType>;
  redirects?: Maybe<Array<Maybe<PrismicSettingsRedirectsGroupType>>>;
  preview_map?: Maybe<Array<Maybe<PrismicSettingsPreviewMapGroupType>>>;
};

export type PrismicSettingsDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  site_name?: Maybe<PrismicStructuredTextTypeFilterInput>;
  site_description?: Maybe<PrismicStructuredTextTypeFilterInput>;
  site_copyright?: Maybe<PrismicStructuredTextTypeFilterInput>;
  facebook_handle?: Maybe<PrismicStructuredTextTypeFilterInput>;
  linkedin_handle?: Maybe<PrismicStructuredTextTypeFilterInput>;
  newsletter_sign_up_link?: Maybe<PrismicLinkTypeFilterInput>;
  redirects?: Maybe<PrismicSettingsRedirectsGroupTypeFilterListInput>;
  preview_map?: Maybe<PrismicSettingsPreviewMapGroupTypeFilterListInput>;
};

export type PrismicSettingsEdge = {
  next?: Maybe<PrismicSettings>;
  node: PrismicSettings;
  previous?: Maybe<PrismicSettings>;
};

export enum PrismicSettingsFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataSiteNameHtml = 'data___site_name___html',
  DataSiteNameText = 'data___site_name___text',
  DataSiteNameRaw = 'data___site_name___raw',
  DataSiteDescriptionHtml = 'data___site_description___html',
  DataSiteDescriptionText = 'data___site_description___text',
  DataSiteDescriptionRaw = 'data___site_description___raw',
  DataSiteCopyrightHtml = 'data___site_copyright___html',
  DataSiteCopyrightText = 'data___site_copyright___text',
  DataSiteCopyrightRaw = 'data___site_copyright___raw',
  DataFacebookHandleHtml = 'data___facebook_handle___html',
  DataFacebookHandleText = 'data___facebook_handle___text',
  DataFacebookHandleRaw = 'data___facebook_handle___raw',
  DataLinkedinHandleHtml = 'data___linkedin_handle___html',
  DataLinkedinHandleText = 'data___linkedin_handle___text',
  DataLinkedinHandleRaw = 'data___linkedin_handle___raw',
  DataNewsletterSignUpLinkLinkType = 'data___newsletter_sign_up_link___link_type',
  DataNewsletterSignUpLinkIsBroken = 'data___newsletter_sign_up_link___isBroken',
  DataNewsletterSignUpLinkUrl = 'data___newsletter_sign_up_link___url',
  DataNewsletterSignUpLinkTarget = 'data___newsletter_sign_up_link___target',
  DataNewsletterSignUpLinkSize = 'data___newsletter_sign_up_link___size',
  DataNewsletterSignUpLinkId = 'data___newsletter_sign_up_link___id',
  DataNewsletterSignUpLinkType = 'data___newsletter_sign_up_link___type',
  DataNewsletterSignUpLinkTags = 'data___newsletter_sign_up_link___tags',
  DataNewsletterSignUpLinkLang = 'data___newsletter_sign_up_link___lang',
  DataNewsletterSignUpLinkSlug = 'data___newsletter_sign_up_link___slug',
  DataNewsletterSignUpLinkUid = 'data___newsletter_sign_up_link___uid',
  DataNewsletterSignUpLinkRaw = 'data___newsletter_sign_up_link___raw',
  DataRedirects = 'data___redirects',
  DataRedirectsFromPath = 'data___redirects___from_path',
  DataRedirectsToPath = 'data___redirects___to_path',
  DataRedirectsIsPermanent = 'data___redirects___is_permanent',
  DataPreviewMap = 'data___preview_map',
  DataPreviewMapApiId = 'data___preview_map___api_id',
  DataPreviewMapPageLinkType = 'data___preview_map___page___link_type',
  DataPreviewMapPageIsBroken = 'data___preview_map___page___isBroken',
  DataPreviewMapPageUrl = 'data___preview_map___page___url',
  DataPreviewMapPageTarget = 'data___preview_map___page___target',
  DataPreviewMapPageSize = 'data___preview_map___page___size',
  DataPreviewMapPageId = 'data___preview_map___page___id',
  DataPreviewMapPageType = 'data___preview_map___page___type',
  DataPreviewMapPageTags = 'data___preview_map___page___tags',
  DataPreviewMapPageLang = 'data___preview_map___page___lang',
  DataPreviewMapPageSlug = 'data___preview_map___page___slug',
  DataPreviewMapPageUid = 'data___preview_map___page___uid',
  DataPreviewMapPageRaw = 'data___preview_map___page___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PrismicSettingsFilterInput = {
  data?: Maybe<PrismicSettingsDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicSettingsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicSettingsEdge>;
  nodes: Array<PrismicSettings>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicSettingsPreviewMapGroupType = {
  api_id?: Maybe<Scalars['String']>;
  page?: Maybe<PrismicLinkType>;
};

export type PrismicSettingsPreviewMapGroupTypeFilterInput = {
  api_id?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicSettingsPreviewMapGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicSettingsPreviewMapGroupTypeFilterInput>;
};

export type PrismicSettingsRedirectsGroupType = {
  from_path?: Maybe<Scalars['String']>;
  to_path?: Maybe<Scalars['String']>;
  is_permanent?: Maybe<Scalars['Boolean']>;
};

export type PrismicSettingsRedirectsGroupTypeFilterInput = {
  from_path?: Maybe<StringQueryOperatorInput>;
  to_path?: Maybe<StringQueryOperatorInput>;
  is_permanent?: Maybe<BooleanQueryOperatorInput>;
};

export type PrismicSettingsRedirectsGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicSettingsRedirectsGroupTypeFilterInput>;
};

export type PrismicSettingsSortInput = {
  fields?: Maybe<Array<Maybe<PrismicSettingsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicSliceType = {
  /** The slice type API ID. */
  slice_type: Scalars['String'];
  /** The slice label. */
  slice_label?: Maybe<Scalars['String']>;
};

/** A text field with formatting options. */
export type PrismicStructuredTextType = {
  /** The HTML value of the text using `prismic-dom` and the HTML serializer. */
  html?: Maybe<Scalars['String']>;
  /** The plain text value of the text using `prismic-dom`. */
  text?: Maybe<Scalars['String']>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>;
};

export type PrismicStructuredTextTypeFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  prismicCohort?: Maybe<PrismicCohort>;
  allPrismicCohort: PrismicCohortConnection;
  prismicCohortScheduleBodySection?: Maybe<PrismicCohortScheduleBodySection>;
  allPrismicCohortScheduleBodySection: PrismicCohortScheduleBodySectionConnection;
  prismicCohortSchedule?: Maybe<PrismicCohortSchedule>;
  allPrismicCohortSchedule: PrismicCohortScheduleConnection;
  prismicFellow?: Maybe<PrismicFellow>;
  allPrismicFellow: PrismicFellowConnection;
  prismicInteriorPageHeaderHeroImage?: Maybe<PrismicInteriorPageHeaderHeroImage>;
  allPrismicInteriorPageHeaderHeroImage: PrismicInteriorPageHeaderHeroImageConnection;
  prismicInteriorPageBodyText?: Maybe<PrismicInteriorPageBodyText>;
  allPrismicInteriorPageBodyText: PrismicInteriorPageBodyTextConnection;
  prismicInteriorPageBodyImages?: Maybe<PrismicInteriorPageBodyImages>;
  allPrismicInteriorPageBodyImages: PrismicInteriorPageBodyImagesConnection;
  prismicInteriorPageBodyVideo?: Maybe<PrismicInteriorPageBodyVideo>;
  allPrismicInteriorPageBodyVideo: PrismicInteriorPageBodyVideoConnection;
  prismicInteriorPageBodyTextIntro?: Maybe<PrismicInteriorPageBodyTextIntro>;
  allPrismicInteriorPageBodyTextIntro: PrismicInteriorPageBodyTextIntroConnection;
  prismicInteriorPageBodyAnchor?: Maybe<PrismicInteriorPageBodyAnchor>;
  allPrismicInteriorPageBodyAnchor: PrismicInteriorPageBodyAnchorConnection;
  prismicInteriorPageBodyCohortSchedule?: Maybe<PrismicInteriorPageBodyCohortSchedule>;
  allPrismicInteriorPageBodyCohortSchedule: PrismicInteriorPageBodyCohortScheduleConnection;
  prismicInteriorPageBodyDivider?: Maybe<PrismicInteriorPageBodyDivider>;
  allPrismicInteriorPageBodyDivider: PrismicInteriorPageBodyDividerConnection;
  prismicInteriorPageBodyStaffDirectory?: Maybe<PrismicInteriorPageBodyStaffDirectory>;
  allPrismicInteriorPageBodyStaffDirectory: PrismicInteriorPageBodyStaffDirectoryConnection;
  prismicInteriorPage?: Maybe<PrismicInteriorPage>;
  allPrismicInteriorPage: PrismicInteriorPageConnection;
  prismicNavigationMainNavItem?: Maybe<PrismicNavigationMainNavItem>;
  allPrismicNavigationMainNavItem: PrismicNavigationMainNavItemConnection;
  prismicNavigation?: Maybe<PrismicNavigation>;
  allPrismicNavigation: PrismicNavigationConnection;
  prismicNewsCategory?: Maybe<PrismicNewsCategory>;
  allPrismicNewsCategory: PrismicNewsCategoryConnection;
  prismicNewsPostBodyText?: Maybe<PrismicNewsPostBodyText>;
  allPrismicNewsPostBodyText: PrismicNewsPostBodyTextConnection;
  prismicNewsPostBodyImages?: Maybe<PrismicNewsPostBodyImages>;
  allPrismicNewsPostBodyImages: PrismicNewsPostBodyImagesConnection;
  prismicNewsPostBodyVideo?: Maybe<PrismicNewsPostBodyVideo>;
  allPrismicNewsPostBodyVideo: PrismicNewsPostBodyVideoConnection;
  prismicNewsPostBodyTextIntro?: Maybe<PrismicNewsPostBodyTextIntro>;
  allPrismicNewsPostBodyTextIntro: PrismicNewsPostBodyTextIntroConnection;
  prismicNewsPostBodyAnchor?: Maybe<PrismicNewsPostBodyAnchor>;
  allPrismicNewsPostBodyAnchor: PrismicNewsPostBodyAnchorConnection;
  prismicNewsPostBodyDivider?: Maybe<PrismicNewsPostBodyDivider>;
  allPrismicNewsPostBodyDivider: PrismicNewsPostBodyDividerConnection;
  prismicNewsPostBodyLinkCard?: Maybe<PrismicNewsPostBodyLinkCard>;
  allPrismicNewsPostBodyLinkCard: PrismicNewsPostBodyLinkCardConnection;
  prismicNewsPost?: Maybe<PrismicNewsPost>;
  allPrismicNewsPost: PrismicNewsPostConnection;
  prismicPageBodyText?: Maybe<PrismicPageBodyText>;
  allPrismicPageBodyText: PrismicPageBodyTextConnection;
  prismicPageBodyImages?: Maybe<PrismicPageBodyImages>;
  allPrismicPageBodyImages: PrismicPageBodyImagesConnection;
  prismicPageBodyAnchor?: Maybe<PrismicPageBodyAnchor>;
  allPrismicPageBodyAnchor: PrismicPageBodyAnchorConnection;
  prismicPageBodyHeroImage?: Maybe<PrismicPageBodyHeroImage>;
  allPrismicPageBodyHeroImage: PrismicPageBodyHeroImageConnection;
  prismicPageBodyQuoteSlideshow?: Maybe<PrismicPageBodyQuoteSlideshow>;
  allPrismicPageBodyQuoteSlideshow: PrismicPageBodyQuoteSlideshowConnection;
  prismicPageBodyLearningExcursionMap?: Maybe<PrismicPageBodyLearningExcursionMap>;
  allPrismicPageBodyLearningExcursionMap: PrismicPageBodyLearningExcursionMapConnection;
  prismicPageBodyFellowsGrid?: Maybe<PrismicPageBodyFellowsGrid>;
  allPrismicPageBodyFellowsGrid: PrismicPageBodyFellowsGridConnection;
  prismicPage?: Maybe<PrismicPage>;
  allPrismicPage: PrismicPageConnection;
  prismicSettings?: Maybe<PrismicSettings>;
  allPrismicSettings: PrismicSettingsConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicCohortArgs = {
  data?: Maybe<PrismicCohortDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicCohortArgs = {
  filter?: Maybe<PrismicCohortFilterInput>;
  sort?: Maybe<PrismicCohortSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicCohortScheduleBodySectionArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicCohortScheduleBodySectionPrimaryTypeFilterInput>;
  items?: Maybe<PrismicCohortScheduleBodySectionItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicCohortScheduleBodySectionArgs = {
  filter?: Maybe<PrismicCohortScheduleBodySectionFilterInput>;
  sort?: Maybe<PrismicCohortScheduleBodySectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicCohortScheduleArgs = {
  data?: Maybe<PrismicCohortScheduleDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicCohortScheduleArgs = {
  filter?: Maybe<PrismicCohortScheduleFilterInput>;
  sort?: Maybe<PrismicCohortScheduleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicFellowArgs = {
  data?: Maybe<PrismicFellowDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicFellowArgs = {
  filter?: Maybe<PrismicFellowFilterInput>;
  sort?: Maybe<PrismicFellowSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicInteriorPageHeaderHeroImageArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicInteriorPageHeaderHeroImagePrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicInteriorPageHeaderHeroImageArgs = {
  filter?: Maybe<PrismicInteriorPageHeaderHeroImageFilterInput>;
  sort?: Maybe<PrismicInteriorPageHeaderHeroImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicInteriorPageBodyTextArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicInteriorPageBodyTextPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicInteriorPageBodyTextArgs = {
  filter?: Maybe<PrismicInteriorPageBodyTextFilterInput>;
  sort?: Maybe<PrismicInteriorPageBodyTextSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicInteriorPageBodyImagesArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  items?: Maybe<PrismicInteriorPageBodyImagesItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicInteriorPageBodyImagesArgs = {
  filter?: Maybe<PrismicInteriorPageBodyImagesFilterInput>;
  sort?: Maybe<PrismicInteriorPageBodyImagesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicInteriorPageBodyVideoArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicInteriorPageBodyVideoPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicInteriorPageBodyVideoArgs = {
  filter?: Maybe<PrismicInteriorPageBodyVideoFilterInput>;
  sort?: Maybe<PrismicInteriorPageBodyVideoSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicInteriorPageBodyTextIntroArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicInteriorPageBodyTextIntroPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicInteriorPageBodyTextIntroArgs = {
  filter?: Maybe<PrismicInteriorPageBodyTextIntroFilterInput>;
  sort?: Maybe<PrismicInteriorPageBodyTextIntroSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicInteriorPageBodyAnchorArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicInteriorPageBodyAnchorPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicInteriorPageBodyAnchorArgs = {
  filter?: Maybe<PrismicInteriorPageBodyAnchorFilterInput>;
  sort?: Maybe<PrismicInteriorPageBodyAnchorSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicInteriorPageBodyCohortScheduleArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicInteriorPageBodyCohortSchedulePrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicInteriorPageBodyCohortScheduleArgs = {
  filter?: Maybe<PrismicInteriorPageBodyCohortScheduleFilterInput>;
  sort?: Maybe<PrismicInteriorPageBodyCohortScheduleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicInteriorPageBodyDividerArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicInteriorPageBodyDividerArgs = {
  filter?: Maybe<PrismicInteriorPageBodyDividerFilterInput>;
  sort?: Maybe<PrismicInteriorPageBodyDividerSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicInteriorPageBodyStaffDirectoryArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  items?: Maybe<PrismicInteriorPageBodyStaffDirectoryItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicInteriorPageBodyStaffDirectoryArgs = {
  filter?: Maybe<PrismicInteriorPageBodyStaffDirectoryFilterInput>;
  sort?: Maybe<PrismicInteriorPageBodyStaffDirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicInteriorPageArgs = {
  data?: Maybe<PrismicInteriorPageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicInteriorPageArgs = {
  filter?: Maybe<PrismicInteriorPageFilterInput>;
  sort?: Maybe<PrismicInteriorPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicNavigationMainNavItemArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicNavigationMainNavItemPrimaryTypeFilterInput>;
  items?: Maybe<PrismicNavigationMainNavItemItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicNavigationMainNavItemArgs = {
  filter?: Maybe<PrismicNavigationMainNavItemFilterInput>;
  sort?: Maybe<PrismicNavigationMainNavItemSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicNavigationArgs = {
  data?: Maybe<PrismicNavigationDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicNavigationArgs = {
  filter?: Maybe<PrismicNavigationFilterInput>;
  sort?: Maybe<PrismicNavigationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicNewsCategoryArgs = {
  data?: Maybe<PrismicNewsCategoryDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicNewsCategoryArgs = {
  filter?: Maybe<PrismicNewsCategoryFilterInput>;
  sort?: Maybe<PrismicNewsCategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicNewsPostBodyTextArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicNewsPostBodyTextPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicNewsPostBodyTextArgs = {
  filter?: Maybe<PrismicNewsPostBodyTextFilterInput>;
  sort?: Maybe<PrismicNewsPostBodyTextSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicNewsPostBodyImagesArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  items?: Maybe<PrismicNewsPostBodyImagesItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicNewsPostBodyImagesArgs = {
  filter?: Maybe<PrismicNewsPostBodyImagesFilterInput>;
  sort?: Maybe<PrismicNewsPostBodyImagesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicNewsPostBodyVideoArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicNewsPostBodyVideoPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicNewsPostBodyVideoArgs = {
  filter?: Maybe<PrismicNewsPostBodyVideoFilterInput>;
  sort?: Maybe<PrismicNewsPostBodyVideoSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicNewsPostBodyTextIntroArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicNewsPostBodyTextIntroPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicNewsPostBodyTextIntroArgs = {
  filter?: Maybe<PrismicNewsPostBodyTextIntroFilterInput>;
  sort?: Maybe<PrismicNewsPostBodyTextIntroSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicNewsPostBodyAnchorArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicNewsPostBodyAnchorPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicNewsPostBodyAnchorArgs = {
  filter?: Maybe<PrismicNewsPostBodyAnchorFilterInput>;
  sort?: Maybe<PrismicNewsPostBodyAnchorSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicNewsPostBodyDividerArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicNewsPostBodyDividerArgs = {
  filter?: Maybe<PrismicNewsPostBodyDividerFilterInput>;
  sort?: Maybe<PrismicNewsPostBodyDividerSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicNewsPostBodyLinkCardArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicNewsPostBodyLinkCardPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicNewsPostBodyLinkCardArgs = {
  filter?: Maybe<PrismicNewsPostBodyLinkCardFilterInput>;
  sort?: Maybe<PrismicNewsPostBodyLinkCardSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicNewsPostArgs = {
  data?: Maybe<PrismicNewsPostDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicNewsPostArgs = {
  filter?: Maybe<PrismicNewsPostFilterInput>;
  sort?: Maybe<PrismicNewsPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageBodyTextArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyTextPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageBodyTextArgs = {
  filter?: Maybe<PrismicPageBodyTextFilterInput>;
  sort?: Maybe<PrismicPageBodyTextSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageBodyImagesArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  items?: Maybe<PrismicPageBodyImagesItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageBodyImagesArgs = {
  filter?: Maybe<PrismicPageBodyImagesFilterInput>;
  sort?: Maybe<PrismicPageBodyImagesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageBodyAnchorArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyAnchorPrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageBodyAnchorArgs = {
  filter?: Maybe<PrismicPageBodyAnchorFilterInput>;
  sort?: Maybe<PrismicPageBodyAnchorSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageBodyHeroImageArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyHeroImagePrimaryTypeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageBodyHeroImageArgs = {
  filter?: Maybe<PrismicPageBodyHeroImageFilterInput>;
  sort?: Maybe<PrismicPageBodyHeroImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageBodyQuoteSlideshowArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  items?: Maybe<PrismicPageBodyQuoteSlideshowItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageBodyQuoteSlideshowArgs = {
  filter?: Maybe<PrismicPageBodyQuoteSlideshowFilterInput>;
  sort?: Maybe<PrismicPageBodyQuoteSlideshowSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageBodyLearningExcursionMapArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicPageBodyLearningExcursionMapPrimaryTypeFilterInput>;
  items?: Maybe<PrismicPageBodyLearningExcursionMapItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageBodyLearningExcursionMapArgs = {
  filter?: Maybe<PrismicPageBodyLearningExcursionMapFilterInput>;
  sort?: Maybe<PrismicPageBodyLearningExcursionMapSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageBodyFellowsGridArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageBodyFellowsGridArgs = {
  filter?: Maybe<PrismicPageBodyFellowsGridFilterInput>;
  sort?: Maybe<PrismicPageBodyFellowsGridSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicPageArgs = {
  data?: Maybe<PrismicPageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicPageArgs = {
  filter?: Maybe<PrismicPageFilterInput>;
  sort?: Maybe<PrismicPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPrismicSettingsArgs = {
  data?: Maybe<PrismicSettingsDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPrismicSettingsArgs = {
  filter?: Maybe<PrismicSettingsFilterInput>;
  sort?: Maybe<PrismicSettingsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataTitleShort = 'siteMetadata___titleShort',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  numPages?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
  nextUID?: Maybe<Scalars['String']>;
  prevUID?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  limit?: Maybe<IntQueryOperatorInput>;
  skip?: Maybe<IntQueryOperatorInput>;
  numPages?: Maybe<IntQueryOperatorInput>;
  currentPage?: Maybe<IntQueryOperatorInput>;
  total?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  nextUID?: Maybe<StringQueryOperatorInput>;
  prevUID?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextLimit = 'context___limit',
  ContextSkip = 'context___skip',
  ContextNumPages = 'context___numPages',
  ContextCurrentPage = 'context___currentPage',
  ContextTotal = 'context___total',
  ContextUid = 'context___uid',
  ContextNextUid = 'context___nextUID',
  ContextPrevUid = 'context___prevUID',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsOutput = 'pluginCreator___pluginOptions___output',
  PluginCreatorPluginOptionsCreateLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsTypekitId = 'pluginCreator___pluginOptions___typekit___id',
  PluginCreatorPluginOptionsGoogleFamilies = 'pluginCreator___pluginOptions___google___families',
  PluginCreatorPluginOptionsHeadersX = 'pluginCreator___pluginOptions___headers____x',
  PluginCreatorPluginOptionsMergeSecurityHeaders = 'pluginCreator___pluginOptions___mergeSecurityHeaders',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsRepositoryName = 'pluginCreator___pluginOptions___repositoryName',
  PluginCreatorPluginOptionsAccessToken = 'pluginCreator___pluginOptions___accessToken',
  PluginCreatorPluginOptionsFetchLinks = 'pluginCreator___pluginOptions___fetchLinks',
  PluginCreatorPluginOptionsPrismicToolbar = 'pluginCreator___pluginOptions___prismicToolbar',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsCreateLinkInHead = 'pluginOptions___createLinkInHead',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsTypekitId = 'pluginOptions___typekit___id',
  PluginOptionsGoogleFamilies = 'pluginOptions___google___families',
  PluginOptionsHeadersX = 'pluginOptions___headers____x',
  PluginOptionsMergeSecurityHeaders = 'pluginOptions___mergeSecurityHeaders',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsRepositoryName = 'pluginOptions___repositoryName',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsFetchLinks = 'pluginOptions___fetchLinks',
  PluginOptionsPrismicToolbar = 'pluginOptions___prismicToolbar',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  typekit?: Maybe<SitePluginPluginOptionsTypekit>;
  google?: Maybe<SitePluginPluginOptionsGoogle>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  mergeSecurityHeaders?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  repositoryName?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  schemas?: Maybe<SitePluginPluginOptionsSchemas>;
  fetchLinks?: Maybe<Array<Maybe<Scalars['String']>>>;
  prismicToolbar?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFilterInput = {
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  typekit?: Maybe<SitePluginPluginOptionsTypekitFilterInput>;
  google?: Maybe<SitePluginPluginOptionsGoogleFilterInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  mergeSecurityHeaders?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  repositoryName?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  schemas?: Maybe<SitePluginPluginOptionsSchemasFilterInput>;
  fetchLinks?: Maybe<StringQueryOperatorInput>;
  prismicToolbar?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsGoogle = {
  families?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsGoogleFilterInput = {
  families?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsHeaders = {
  _x?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  _x?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemas = {
  cohort?: Maybe<SitePluginPluginOptionsSchemasCohort>;
  cohort_schedule?: Maybe<SitePluginPluginOptionsSchemasCohort_Schedule>;
  fellow?: Maybe<SitePluginPluginOptionsSchemasFellow>;
  interior_page?: Maybe<SitePluginPluginOptionsSchemasInterior_Page>;
  navigation?: Maybe<SitePluginPluginOptionsSchemasNavigation>;
  news_category?: Maybe<SitePluginPluginOptionsSchemasNews_Category>;
  news_post?: Maybe<SitePluginPluginOptionsSchemasNews_Post>;
  page?: Maybe<SitePluginPluginOptionsSchemasPage>;
  settings?: Maybe<SitePluginPluginOptionsSchemasSettings>;
};

export type SitePluginPluginOptionsSchemasCohort = {
  Main?: Maybe<SitePluginPluginOptionsSchemasCohortMain>;
};

export type SitePluginPluginOptionsSchemasCohort_Schedule = {
  Main?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMain>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainTitle>;
  uid?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainUid>;
  body?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBody>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBody = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfig>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoices>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoices = {
  section?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSection>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesFilterInput = {
  section?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSection = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_Repeat>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeat>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatFilterInput>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_Repeat = {
  description_heading?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_Heading>;
  dates_heading?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_Heading>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_Heading = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_HeadingConfig>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_HeadingConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_HeadingConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_HeadingFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_HeadingConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_Heading = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_HeadingConfig>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_HeadingConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_HeadingConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_HeadingFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_HeadingConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatFilterInput = {
  description_heading?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_HeadingFilterInput>;
  dates_heading?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_HeadingFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeat = {
  event_description?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_Description>;
  event_date?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_Date>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_Date = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DateConfig>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DateConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DateConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DateFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DateConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_Description = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DescriptionConfig>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DescriptionConfig = {
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DescriptionConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DescriptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatFilterInput = {
  event_description?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DescriptionFilterInput>;
  event_date?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DateFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigFilterInput = {
  choices?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainTitleFilterInput>;
  uid?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainUidFilterInput>;
  body?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainTitle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainTitleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainUid = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainUidConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohortFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasCohortMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohortMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasCohortMainTitle>;
  uid?: Maybe<SitePluginPluginOptionsSchemasCohortMainUid>;
  cohort_number?: Maybe<SitePluginPluginOptionsSchemasCohortMainCohort_Number>;
};

export type SitePluginPluginOptionsSchemasCohortMainCohort_Number = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohortMainCohort_NumberConfig>;
};

export type SitePluginPluginOptionsSchemasCohortMainCohort_NumberConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCohortMainCohort_NumberConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCohortMainCohort_NumberFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohortMainCohort_NumberConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohortMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasCohortMainTitleFilterInput>;
  uid?: Maybe<SitePluginPluginOptionsSchemasCohortMainUidFilterInput>;
  cohort_number?: Maybe<SitePluginPluginOptionsSchemasCohortMainCohort_NumberFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohortMainTitle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohortMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasCohortMainTitleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCohortMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCohortMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohortMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasCohortMainUid = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohortMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasCohortMainUidConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasCohortMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasCohortMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasCohortMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasFellow = {
  Main?: Maybe<SitePluginPluginOptionsSchemasFellowMain>;
};

export type SitePluginPluginOptionsSchemasFellowFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasFellowMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasFellowMain = {
  name?: Maybe<SitePluginPluginOptionsSchemasFellowMainName>;
  uid?: Maybe<SitePluginPluginOptionsSchemasFellowMainUid>;
  cohort?: Maybe<SitePluginPluginOptionsSchemasFellowMainCohort>;
  biography?: Maybe<SitePluginPluginOptionsSchemasFellowMainBiography>;
  portrait?: Maybe<SitePluginPluginOptionsSchemasFellowMainPortrait>;
  photo?: Maybe<SitePluginPluginOptionsSchemasFellowMainPhoto>;
};

export type SitePluginPluginOptionsSchemasFellowMainBiography = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainBiographyConfig>;
};

export type SitePluginPluginOptionsSchemasFellowMainBiographyConfig = {
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasFellowMainBiographyConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasFellowMainBiographyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainBiographyConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasFellowMainCohort = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainCohortConfig>;
};

export type SitePluginPluginOptionsSchemasFellowMainCohortConfig = {
  select?: Maybe<Scalars['String']>;
  customtypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasFellowMainCohortConfigFilterInput = {
  select?: Maybe<StringQueryOperatorInput>;
  customtypes?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasFellowMainCohortFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainCohortConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasFellowMainFilterInput = {
  name?: Maybe<SitePluginPluginOptionsSchemasFellowMainNameFilterInput>;
  uid?: Maybe<SitePluginPluginOptionsSchemasFellowMainUidFilterInput>;
  cohort?: Maybe<SitePluginPluginOptionsSchemasFellowMainCohortFilterInput>;
  biography?: Maybe<SitePluginPluginOptionsSchemasFellowMainBiographyFilterInput>;
  portrait?: Maybe<SitePluginPluginOptionsSchemasFellowMainPortraitFilterInput>;
  photo?: Maybe<SitePluginPluginOptionsSchemasFellowMainPhotoFilterInput>;
};

export type SitePluginPluginOptionsSchemasFellowMainName = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainNameConfig>;
};

export type SitePluginPluginOptionsSchemasFellowMainNameConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasFellowMainNameConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasFellowMainNameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainNameConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasFellowMainPhoto = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainPhotoConfig>;
};

export type SitePluginPluginOptionsSchemasFellowMainPhotoConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasFellowMainPhotoConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasFellowMainPhotoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainPhotoConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasFellowMainPortrait = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainPortraitConfig>;
};

export type SitePluginPluginOptionsSchemasFellowMainPortraitConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasFellowMainPortraitConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasFellowMainPortraitFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainPortraitConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasFellowMainUid = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasFellowMainUidConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasFellowMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasFellowMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasFilterInput = {
  cohort?: Maybe<SitePluginPluginOptionsSchemasCohortFilterInput>;
  cohort_schedule?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleFilterInput>;
  fellow?: Maybe<SitePluginPluginOptionsSchemasFellowFilterInput>;
  interior_page?: Maybe<SitePluginPluginOptionsSchemasInterior_PageFilterInput>;
  navigation?: Maybe<SitePluginPluginOptionsSchemasNavigationFilterInput>;
  news_category?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryFilterInput>;
  news_post?: Maybe<SitePluginPluginOptionsSchemasNews_PostFilterInput>;
  page?: Maybe<SitePluginPluginOptionsSchemasPageFilterInput>;
  settings?: Maybe<SitePluginPluginOptionsSchemasSettingsFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_Page = {
  Main?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMain>;
  Header?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeader>;
  Body?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBody>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBody = {
  body?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBody>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBody = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoices>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoices = {
  text?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText>;
  images?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImages>;
  video?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideo>;
  text_intro?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_Intro>;
  anchor?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchor>;
  cohort_schedule?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_Schedule>;
  divider?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesDivider>;
  staff_directory?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_Directory>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchor = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_Repeat = {
  id?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatId>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatFilterInput = {
  id?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatIdFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatId = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatIdConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatIdConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatIdConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatIdFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatIdConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_Schedule = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_Repeat = {
  cohort_schedule?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_Schedule>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_Schedule = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_ScheduleConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_ScheduleConfig = {
  select?: Maybe<Scalars['String']>;
  customtypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_ScheduleConfigFilterInput = {
  select?: Maybe<StringQueryOperatorInput>;
  customtypes?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_ScheduleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_ScheduleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatFilterInput = {
  cohort_schedule?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_ScheduleFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesDivider = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesDividerFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesFilterInput = {
  text?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextFilterInput>;
  images?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesFilterInput>;
  video?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoFilterInput>;
  text_intro?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroFilterInput>;
  anchor?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorFilterInput>;
  cohort_schedule?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleFilterInput>;
  divider?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesDividerFilterInput>;
  staff_directory?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImages = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeat>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeat = {
  image?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImage>;
  caption?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaption>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaption = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaptionConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaptionConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaptionConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatFilterInput = {
  image?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageFilterInput>;
  caption?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaptionFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImage = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfig = {
  constraint?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfigConstraint>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfigConstraint = {
  width?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfigConstraintFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfigFilterInput = {
  constraint?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfigConstraintFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_Directory = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeat>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeat = {
  photo?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhoto>;
  name?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatName>;
  staff_title?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_Title>;
  biography?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiography>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiography = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiographyConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiographyConfig = {
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiographyConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiographyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiographyConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatFilterInput = {
  photo?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhotoFilterInput>;
  name?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatNameFilterInput>;
  staff_title?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_TitleFilterInput>;
  biography?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiographyFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatName = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatNameConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatNameConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatNameConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatNameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatNameConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhoto = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhotoConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhotoConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhotoConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhotoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhotoConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_Title = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_TitleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_TitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_Intro = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_Repeat = {
  introductory_text?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_Text>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatFilterInput = {
  introductory_text?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_Text = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfig = {
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_Repeat = {
  text?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatText>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatFilterInput = {
  text?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatTextFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatText = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatTextConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatTextConfig = {
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatTextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideo = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_Repeat = {
  video?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideo>;
  poster?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPoster>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatFilterInput = {
  video?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideoFilterInput>;
  poster?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPosterFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPoster = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPosterConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPosterConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPosterConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPosterFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPosterConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideo = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideoConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideoConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideoConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideoConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigFilterInput = {
  choices?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageBodyFilterInput = {
  body?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainFilterInput>;
  Header?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderFilterInput>;
  Body?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeader = {
  header?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeader>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderFilterInput = {
  header?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeader = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoices>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoices = {
  hero_image?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_Image>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesFilterInput = {
  hero_image?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_Image = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_Repeat = {
  heading?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeading>;
  background_image?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_Image>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_Image = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_ImageConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_ImageConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_ImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_ImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_ImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatFilterInput = {
  heading?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeadingFilterInput>;
  background_image?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_ImageFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeading = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeadingConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeadingConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeadingConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeadingFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeadingConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigFilterInput = {
  choices?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainTitle>;
  uid?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainUid>;
  meta_title?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_Title>;
  meta_description?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_Description>;
  parent?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainParent>;
  redirect_to?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_To>;
  redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_Permanent>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainTitleFilterInput>;
  uid?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainUidFilterInput>;
  meta_title?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_TitleFilterInput>;
  meta_description?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_DescriptionFilterInput>;
  parent?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainParentFilterInput>;
  redirect_to?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_ToFilterInput>;
  redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_PermanentFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_Description = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_DescriptionConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_DescriptionConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_DescriptionConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_DescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_DescriptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_Title = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_TitleConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_TitleConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainParent = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainParentConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainParentConfig = {
  select?: Maybe<Scalars['String']>;
  customtypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainParentConfigFilterInput = {
  select?: Maybe<StringQueryOperatorInput>;
  customtypes?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainParentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainParentConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_Permanent = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_PermanentConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_PermanentConfig = {
  placeholder_false?: Maybe<Scalars['String']>;
  placeholder_true?: Maybe<Scalars['String']>;
  default_value?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_PermanentConfigFilterInput = {
  placeholder_false?: Maybe<StringQueryOperatorInput>;
  placeholder_true?: Maybe<StringQueryOperatorInput>;
  default_value?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_PermanentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_PermanentConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_To = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_ToConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_ToConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_ToConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_ToFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_ToConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainTitle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainTitleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainUid = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainUidConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasInterior_PageMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigation = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNavigationMain>;
};

export type SitePluginPluginOptionsSchemasNavigationFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNavigationMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitle>;
  uid?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUid>;
  main?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMain>;
};

export type SitePluginPluginOptionsSchemasNavigationMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleFilterInput>;
  uid?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidFilterInput>;
  main?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMain = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfig>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoices>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoices = {
  nav_item?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_Item>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesFilterInput = {
  nav_item?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_Item = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_Repeat>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeat>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatFilterInput>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_Repeat = {
  name?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatName>;
  link?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLink>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatFilterInput = {
  name?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameFilterInput>;
  link?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLink = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkConfig>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkConfig = {
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkConfigFilterInput = {
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatName = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameConfig>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeat = {
  name?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatName>;
  link?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLink>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatFilterInput = {
  name?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatNameFilterInput>;
  link?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLinkFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLink = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLinkConfig>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLinkConfig = {
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLinkConfigFilterInput = {
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatName = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatNameConfig>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatNameConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatNameConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatNameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatNameConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigFilterInput = {
  choices?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainMainFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainTitle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasNavigationMainTitleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNavigationMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainUid = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasNavigationMainUidConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNavigationMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNavigationMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_Category = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMain>;
};

export type SitePluginPluginOptionsSchemasNews_CategoryFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_CategoryMain = {
  name?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainName>;
  uid?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainUid>;
};

export type SitePluginPluginOptionsSchemasNews_CategoryMainFilterInput = {
  name?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainNameFilterInput>;
  uid?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainUidFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_CategoryMainName = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainNameConfig>;
};

export type SitePluginPluginOptionsSchemasNews_CategoryMainNameConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_CategoryMainNameConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_CategoryMainNameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainNameConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_CategoryMainUid = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasNews_CategoryMainUidConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_CategoryMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_CategoryMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_Post = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNews_PostMain>;
  Body?: Maybe<SitePluginPluginOptionsSchemasNews_PostBody>;
};

export type SitePluginPluginOptionsSchemasNews_PostBody = {
  body?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBody>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBody = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoices>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoices = {
  text?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText>;
  images?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImages>;
  video?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideo>;
  text_intro?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_Intro>;
  anchor?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchor>;
  divider?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesDivider>;
  link_card?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_Card>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchor = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_Repeat = {
  id?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatId>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatFilterInput = {
  id?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatIdFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatId = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatIdConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatIdConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatIdConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatIdFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatIdConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesDivider = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesDividerFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesFilterInput = {
  text?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextFilterInput>;
  images?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesFilterInput>;
  video?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoFilterInput>;
  text_intro?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroFilterInput>;
  anchor?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorFilterInput>;
  divider?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesDividerFilterInput>;
  link_card?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImages = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeat>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeat = {
  image?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImage>;
  caption?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaption>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaption = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaptionConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaptionConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaptionConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatFilterInput = {
  image?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageFilterInput>;
  caption?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaptionFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImage = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfig = {
  constraint?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfigConstraint>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfigConstraint = {
  width?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfigConstraintFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfigFilterInput = {
  constraint?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfigConstraintFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_Card = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_Repeat = {
  link_title?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_Title>;
  link?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatFilterInput = {
  link_title?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleFilterInput>;
  link?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLinkFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_Title = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_Intro = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_Repeat = {
  introductory_text?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_Text>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatFilterInput = {
  introductory_text?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_Text = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfig = {
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_Repeat = {
  text?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatText>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatFilterInput = {
  text?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatTextFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatText = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatTextConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatTextConfig = {
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatTextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideo = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_Repeat = {
  video?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideo>;
  poster?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPoster>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatFilterInput = {
  video?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideoFilterInput>;
  poster?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPosterFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPoster = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPosterConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPosterConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPosterConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPosterFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPosterConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideo = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideoConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideoConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideoConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideoConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigFilterInput = {
  choices?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostBodyFilterInput = {
  body?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainFilterInput>;
  Body?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainTitle>;
  uid?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainUid>;
  published_at?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainPublished_At>;
  excerpt?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainExcerpt>;
  news_categories?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_Categories>;
  related_links?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainRelated_Links>;
  featured_image?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainFeatured_Image>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainExcerpt = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainExcerptConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainExcerptConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainExcerptConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainExcerptFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainExcerptConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainFeatured_Image = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainFeatured_ImageConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainFeatured_ImageConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainFeatured_ImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainFeatured_ImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainFeatured_ImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainTitleFilterInput>;
  uid?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainUidFilterInput>;
  published_at?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainPublished_AtFilterInput>;
  excerpt?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainExcerptFilterInput>;
  news_categories?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesFilterInput>;
  related_links?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksFilterInput>;
  featured_image?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainFeatured_ImageFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainNews_Categories = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfig = {
  fields?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFields = {
  news_category?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_Category>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsFilterInput = {
  news_category?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_CategoryFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_Category = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_CategoryConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_CategoryConfig = {
  select?: Maybe<Scalars['String']>;
  customtypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_CategoryConfigFilterInput = {
  select?: Maybe<StringQueryOperatorInput>;
  customtypes?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_CategoryFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_CategoryConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainPublished_At = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainPublished_AtConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainPublished_AtConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainPublished_AtConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainPublished_AtFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainPublished_AtConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainRelated_Links = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfig = {
  fields?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfigFields = {
  related_link?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfigFieldsRelated_Link>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfigFieldsFilterInput = {
  related_link?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfigFieldsRelated_LinkFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfigFieldsRelated_Link = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfigFieldsRelated_LinkConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfigFieldsRelated_LinkConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfigFieldsRelated_LinkConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfigFieldsRelated_LinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfigFieldsRelated_LinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainRelated_LinksConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainTitle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainTitleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainUid = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainUidConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasNews_PostMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPage = {
  Main?: Maybe<SitePluginPluginOptionsSchemasPageMain>;
  Body?: Maybe<SitePluginPluginOptionsSchemasPageBody>;
};

export type SitePluginPluginOptionsSchemasPageBody = {
  body?: Maybe<SitePluginPluginOptionsSchemasPageBodyBody>;
};

export type SitePluginPluginOptionsSchemasPageBodyBody = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoices>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoices = {
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText>;
  images?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImages>;
  anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchor>;
  hero_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image>;
  quote_slideshow?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_Slideshow>;
  learning_excursion_map?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_Map>;
  fellows_grid?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFellows_Grid>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchor = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_Repeat = {
  id?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatId>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatFilterInput = {
  id?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatIdFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatId = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatIdConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatIdConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatIdConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatIdFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatIdConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFellows_Grid = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFellows_GridFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterInput = {
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextFilterInput>;
  images?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesFilterInput>;
  anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorFilterInput>;
  hero_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageFilterInput>;
  quote_slideshow?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowFilterInput>;
  learning_excursion_map?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapFilterInput>;
  fellows_grid?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFellows_GridFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_Repeat = {
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatText>;
  button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_Text>;
  button_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_Link>;
  background_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_Image>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_Image = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_ImageConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_ImageConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_ImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_ImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_ImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_Link = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_LinkConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_LinkConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_LinkConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_LinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_LinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_Text = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_TextConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_TextConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_TextConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_TextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_TextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatFilterInput = {
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatTextFilterInput>;
  button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_TextFilterInput>;
  button_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_LinkFilterInput>;
  background_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_ImageFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatText = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatTextConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatTextConfig = {
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatTextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatTextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatTextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImages = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeat>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeat = {
  image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatImage>;
  caption?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatCaption>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatCaption = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatCaptionConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatCaptionConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatCaptionConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatCaptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatCaptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatFilterInput = {
  image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatImageFilterInput>;
  caption?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatCaptionFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatImage = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatImageConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatImageConfig = {
  constraint?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatImageConfigConstraint>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatImageConfigConstraint = {
  width?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatImageConfigConstraintFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatImageConfigFilterInput = {
  constraint?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatImageConfigConstraintFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImagesRepeatImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_Map = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_Repeat>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeat>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatFilterInput>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_Repeat = {
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatText>;
  map_url?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_Url>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatFilterInput = {
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatTextFilterInput>;
  map_url?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_UrlFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_Url = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_UrlConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_UrlConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_UrlConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_UrlFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_UrlConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatText = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatTextConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatTextConfig = {
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatTextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatTextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatTextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeat = {
  fellow_photo?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_Photo>;
  fellow_name?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_Name>;
  video_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatVideo_Link>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_Name = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_NameConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_NameConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_NameConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_NameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_NameConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_Photo = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_PhotoConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_PhotoConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_PhotoConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_PhotoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_PhotoConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFilterInput = {
  fellow_photo?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_PhotoFilterInput>;
  fellow_name?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatFellow_NameFilterInput>;
  video_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatVideo_LinkFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatVideo_Link = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatVideo_LinkConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatVideo_LinkConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatVideo_LinkConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatVideo_LinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapRepeatVideo_LinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_Slideshow = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeat>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeat = {
  photo?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhoto>;
  quote?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuote>;
  quotee_name?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_Name>;
  quotee_title?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_Title>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatFilterInput = {
  photo?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhotoFilterInput>;
  quote?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuoteFilterInput>;
  quotee_name?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_NameFilterInput>;
  quotee_title?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_TitleFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhoto = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhotoConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhotoConfig = {
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhotoConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhotoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhotoConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuote = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuoteConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuoteConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuoteConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_Name = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_NameConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_NameConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_NameConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_NameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_NameConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_Title = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_TitleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_TitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuoteFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuoteConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText = {
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_Repeat>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_Repeat = {
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatText>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatFilterInput = {
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatText = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextConfig>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextConfig = {
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigFilterInput = {
  choices?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageBodyFilterInput = {
  body?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasPageMainFilterInput>;
  Body?: Maybe<SitePluginPluginOptionsSchemasPageBodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasPageMainTitle>;
  uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUid>;
  meta_title?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_Title>;
  meta_description?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_Description>;
  parent?: Maybe<SitePluginPluginOptionsSchemasPageMainParent>;
  redirect_to?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_To>;
  redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_Permanent>;
};

export type SitePluginPluginOptionsSchemasPageMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleFilterInput>;
  uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUidFilterInput>;
  meta_title?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleFilterInput>;
  meta_description?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionFilterInput>;
  parent?: Maybe<SitePluginPluginOptionsSchemasPageMainParentFilterInput>;
  redirect_to?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToFilterInput>;
  redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_Description = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_Title = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainParent = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainParentConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainParentConfig = {
  select?: Maybe<Scalars['String']>;
  customtypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainParentConfigFilterInput = {
  select?: Maybe<StringQueryOperatorInput>;
  customtypes?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainParentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainParentConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_Permanent = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfig = {
  placeholder_false?: Maybe<Scalars['String']>;
  placeholder_true?: Maybe<Scalars['String']>;
  default_value?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfigFilterInput = {
  placeholder_false?: Maybe<StringQueryOperatorInput>;
  placeholder_true?: Maybe<StringQueryOperatorInput>;
  default_value?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_To = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainTitle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainTitleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainUid = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainUidConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettings = {
  Main?: Maybe<SitePluginPluginOptionsSchemasSettingsMain>;
  Redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirects>;
  Developer_Only?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_Only>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_Only = {
  preview_map?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_Map>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyFilterInput = {
  preview_map?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_Map = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfig = {
  fields?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFields = {
  api_id?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_Id>;
  page?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPage>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_Id = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsFilterInput = {
  api_id?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdFilterInput>;
  page?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPage = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFilterInput>;
  Redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsFilterInput>;
  Developer_Only?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitle>;
  site_name?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Name>;
  site_description?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Description>;
  site_copyright?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Copyright>;
  facebook_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_Handle>;
  linkedin_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainLinkedin_Handle>;
  newsletter_sign_up_link?: Maybe<SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_Link>;
};

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_Handle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleFilterInput>;
  site_name?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameFilterInput>;
  site_description?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionFilterInput>;
  site_copyright?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightFilterInput>;
  facebook_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleFilterInput>;
  linkedin_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainLinkedin_HandleFilterInput>;
  newsletter_sign_up_link?: Maybe<SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_LinkFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainLinkedin_Handle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainLinkedin_HandleConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainLinkedin_HandleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainLinkedin_HandleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainLinkedin_HandleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainLinkedin_HandleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_Link = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_LinkConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_LinkConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_LinkConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_LinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_LinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_Copyright = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_Description = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_Name = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainTitle = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsMainTitleConfig = {
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirects = {
  redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirects>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsFilterInput = {
  redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirects = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfig = {
  fields?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFields = {
  from_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_Path>;
  to_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_Path>;
  is_permanent?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_Permanent>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFilterInput = {
  from_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathFilterInput>;
  to_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathFilterInput>;
  is_permanent?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_Path = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_Permanent = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfig = {
  placeholder_false?: Maybe<Scalars['String']>;
  placeholder_true?: Maybe<Scalars['String']>;
  default_value?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfigFilterInput = {
  placeholder_false?: Maybe<StringQueryOperatorInput>;
  placeholder_true?: Maybe<StringQueryOperatorInput>;
  default_value?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_Path = {
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfig>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfig = {
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFilterInput>;
};

export type SitePluginPluginOptionsTypekit = {
  id?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsTypekitFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  titleShort?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  titleShort?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type GatsbyPrismicImageFixedFragment = Pick<PrismicImageFixedType, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyPrismicImageFixed_NoBase64Fragment = Pick<PrismicImageFixedType, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyPrismicImageFixed_WithWebpFragment = Pick<PrismicImageFixedType, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyPrismicImageFixed_WithWebp_NoBase64Fragment = Pick<PrismicImageFixedType, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyPrismicImageFluidFragment = Pick<PrismicImageFluidType, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyPrismicImageFluid_NoBase64Fragment = Pick<PrismicImageFluidType, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyPrismicImageFluid_WithWebpFragment = Pick<PrismicImageFluidType, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyPrismicImageFluid_WithWebp_NoBase64Fragment = Pick<PrismicImageFluidType, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type PrismicPageParentRecursiveFragment = (
  { data?: Maybe<{ parent?: Maybe<{ document?: Maybe<(
        { data?: Maybe<{ parent?: Maybe<{ document?: Maybe<(
              { data?: Maybe<{ parent?: Maybe<{ document?: Maybe<(
                    { data?: Maybe<{ parent?: Maybe<{ document?: Maybe<PrismicPageParentFieldsFragment> }> }> }
                    & PrismicPageParentFieldsFragment
                  )> }> }> }
              & PrismicPageParentFieldsFragment
            )> }> }> }
        & PrismicPageParentFieldsFragment
      )> }> }> }
  & PrismicPageParentFieldsFragment
);

export type PrismicPageParentFieldsFragment = (
  Pick<PrismicPage, 'uid' | 'url'>
  & { data?: Maybe<{ title?: Maybe<Pick<PrismicStructuredTextType, 'text'>> }> }
);

export type PrismicInteriorPageParentRecursiveFragment = (
  { data?: Maybe<{ parent?: Maybe<{ document?: Maybe<(
        { data?: Maybe<{ parent?: Maybe<{ document?: Maybe<(
              { data?: Maybe<{ parent?: Maybe<{ document?: Maybe<(
                    { data?: Maybe<{ parent?: Maybe<{ document?: Maybe<PrismicInteriorPageParentFieldsFragment> }> }> }
                    & PrismicInteriorPageParentFieldsFragment
                  )> }> }> }
              & PrismicInteriorPageParentFieldsFragment
            )> }> }> }
        & PrismicInteriorPageParentFieldsFragment
      )> }> }> }
  & PrismicInteriorPageParentFieldsFragment
);

export type PrismicInteriorPageParentFieldsFragment = (
  Pick<PrismicInteriorPage, 'uid' | 'url'>
  & { data?: Maybe<{ title?: Maybe<Pick<PrismicStructuredTextType, 'text'>> }> }
);

export type UseCohortsQueryVariables = Exact<{ [key: string]: never; }>;


export type UseCohortsQuery = { allPrismicCohort: { nodes: Array<(
      Pick<PrismicCohort, 'uid'>
      & { data?: Maybe<(
        Pick<PrismicCohortDataType, 'cohort_number'>
        & { title?: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
      )> }
    )> } };

export type UseFellowsQueryVariables = Exact<{ [key: string]: never; }>;


export type UseFellowsQuery = { allPrismicFellow: { nodes: Array<(
      Pick<PrismicFellow, 'uid'>
      & { data?: Maybe<{ name?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, cohort?: Maybe<{ document?: Maybe<(
            Pick<PrismicCohort, 'uid'>
            & { data?: Maybe<(
              Pick<PrismicCohortDataType, 'cohort_number'>
              & { title?: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
            )> }
          )> }>, biography?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>>, portrait?: Maybe<(
          Pick<PrismicImageType, 'alt'>
          & { fluid?: Maybe<GatsbyPrismicImageFluidFragment> }
        )>, photo?: Maybe<(
          Pick<PrismicImageType, 'alt'>
          & { fluid?: Maybe<GatsbyPrismicImageFluidFragment> }
        )> }> }
    )> } };

export type UseNavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type UseNavigationQuery = { primary?: Maybe<UseNavigationDataFragment>, secondary?: Maybe<UseNavigationDataFragment>, footer?: Maybe<UseNavigationDataFragment> };

export type UseNavigationDataFragment = { data?: Maybe<{ main?: Maybe<Array<Maybe<(
      Pick<PrismicNavigationMainNavItem, 'id'>
      & { primary?: Maybe<(
        Pick<PrismicNavigationMainNavItemPrimaryType, 'name'>
        & { link?: Maybe<Pick<PrismicLinkType, 'uid' | 'url'>> }
      )>, items?: Maybe<Array<Maybe<(
        Pick<PrismicNavigationMainNavItemItemType, 'name'>
        & { link?: Maybe<Pick<PrismicLinkType, 'uid' | 'url'>> }
      )>>> }
    )>>> }> };

export type UseNewsCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type UseNewsCategoriesQuery = { allPrismicNewsCategory: { nodes: Array<(
      Pick<PrismicNewsCategory, 'uid'>
      & { data?: Maybe<{ name?: Maybe<Pick<PrismicStructuredTextType, 'text'>> }> }
    )> } };

export type UseSiteMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type UseSiteMetadataQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'titleShort' | 'description' | 'siteUrl'>> }> };

export type PrismicSiteSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type PrismicSiteSettingsQuery = { prismicSettings?: Maybe<{ data?: Maybe<{ site_name?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, site_description?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, site_copyright?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, facebook_handle?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, linkedin_handle?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, newsletter_sign_up_link?: Maybe<Pick<PrismicLinkType, 'url'>> }> }> };

export type NotFoundPageQueryVariables = Exact<{ [key: string]: never; }>;


export type NotFoundPageQuery = { prismicPage?: Maybe<(
    Pick<PrismicPage, '_previewable'>
    & { data?: Maybe<(
      Pick<PrismicPageDataType, 'meta_title' | 'meta_description'>
      & { title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, body?: Maybe<Array<Maybe<(
        { __typename: 'PrismicPageBodyText' }
        & Pick<PrismicPageBodyText, 'id'>
        & SlicesPageBody_PrismicPageBodyText_Fragment
      ) | (
        { __typename: 'PrismicPageBodyImages' }
        & Pick<PrismicPageBodyImages, 'id'>
        & SlicesPageBody_PrismicPageBodyImages_Fragment
      ) | (
        { __typename: 'PrismicPageBodyAnchor' }
        & Pick<PrismicPageBodyAnchor, 'id'>
        & SlicesPageBody_PrismicPageBodyAnchor_Fragment
      ) | (
        { __typename: 'PrismicPageBodyHeroImage' }
        & Pick<PrismicPageBodyHeroImage, 'id'>
        & SlicesPageBody_PrismicPageBodyHeroImage_Fragment
      ) | (
        { __typename: 'PrismicPageBodyQuoteSlideshow' }
        & Pick<PrismicPageBodyQuoteSlideshow, 'id'>
        & SlicesPageBody_PrismicPageBodyQuoteSlideshow_Fragment
      ) | (
        { __typename: 'PrismicPageBodyLearningExcursionMap' }
        & Pick<PrismicPageBodyLearningExcursionMap, 'id'>
        & SlicesPageBody_PrismicPageBodyLearningExcursionMap_Fragment
      ) | (
        { __typename: 'PrismicPageBodyFellowsGrid' }
        & Pick<PrismicPageBodyFellowsGrid, 'id'>
        & SlicesPageBody_PrismicPageBodyFellowsGrid_Fragment
      )>>> }
    )> }
  )> };

type SlicesInteriorPageBody_PrismicInteriorPageBodyText_Fragment = InteriorPageBodyTextFragment;

type SlicesInteriorPageBody_PrismicInteriorPageBodyImages_Fragment = InteriorPageBodyImagesFragment;

type SlicesInteriorPageBody_PrismicInteriorPageBodyVideo_Fragment = InteriorPageBodyVideoFragment;

type SlicesInteriorPageBody_PrismicInteriorPageBodyTextIntro_Fragment = InteriorPageBodyTextIntroFragment;

type SlicesInteriorPageBody_PrismicInteriorPageBodyAnchor_Fragment = InteriorPageBodyAnchorFragment;

type SlicesInteriorPageBody_PrismicInteriorPageBodyCohortSchedule_Fragment = InteriorPageBodyCohortScheduleFragment;

type SlicesInteriorPageBody_PrismicInteriorPageBodyStaffDirectory_Fragment = InteriorPageBodyStaffDirectoryFragment;

export type SlicesInteriorPageBodyFragment = SlicesInteriorPageBody_PrismicInteriorPageBodyText_Fragment | SlicesInteriorPageBody_PrismicInteriorPageBodyImages_Fragment | SlicesInteriorPageBody_PrismicInteriorPageBodyVideo_Fragment | SlicesInteriorPageBody_PrismicInteriorPageBodyTextIntro_Fragment | SlicesInteriorPageBody_PrismicInteriorPageBodyAnchor_Fragment | SlicesInteriorPageBody_PrismicInteriorPageBodyCohortSchedule_Fragment | SlicesInteriorPageBody_PrismicInteriorPageBodyStaffDirectory_Fragment;

export type InteriorPageBodyAnchorFragment = { primary?: Maybe<Pick<PrismicInteriorPageBodyAnchorPrimaryType, 'id'>> };

export type InteriorPageBodyCohortScheduleFragment = { primary?: Maybe<{ cohort_schedule?: Maybe<{ document?: Maybe<{ data?: Maybe<{ body?: Maybe<Array<Maybe<{ primary?: Maybe<{ description_heading?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, dates_heading?: Maybe<Pick<PrismicStructuredTextType, 'text'>> }>, items?: Maybe<Array<Maybe<{ event_description?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>>, event_date?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>> }>>> }>>> }> }> }> }> };

export type InteriorPageBodyImagesFragment = { items?: Maybe<Array<Maybe<{ image?: Maybe<(
      Pick<PrismicImageType, 'alt' | 'url'>
      & { fluid?: Maybe<GatsbyPrismicImageFluidFragment> }
    )>, caption?: Maybe<Pick<PrismicStructuredTextType, 'html' | 'text'>> }>>> };

export type InteriorPageBodyStaffDirectoryFragment = { items?: Maybe<Array<Maybe<{ name?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, staff_title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, biography?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>>, photo?: Maybe<(
      Pick<PrismicImageType, 'alt'>
      & { fluid?: Maybe<GatsbyPrismicImageFluidFragment> }
    )> }>>> };

export type InteriorPageBodyTextFragment = { primary?: Maybe<{ text?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>> }> };

export type InteriorPageBodyTextIntroFragment = { primary?: Maybe<{ introductory_text?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>> }> };

export type InteriorPageBodyVideoFragment = { primary?: Maybe<{ video?: Maybe<Pick<PrismicEmbedType, 'embed_url' | 'thumbnail_url' | 'thumbnail_height' | 'thumbnail_width'>>, poster?: Maybe<(
      Pick<PrismicImageType, 'alt'>
      & { fluid?: Maybe<GatsbyPrismicImageFluidFragment> }
    )> }> };

export type SlicesInteriorPageHeaderFragment = InteriorPageHeaderHeroImageFragment;

export type InteriorPageHeaderHeroImageFragment = { primary?: Maybe<{ heading?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, background_image?: Maybe<{ fluid?: Maybe<GatsbyPrismicImageFluidFragment> }> }> };

type SlicesNewsPostBody_PrismicNewsPostBodyText_Fragment = NewsPostBodyTextFragment;

type SlicesNewsPostBody_PrismicNewsPostBodyImages_Fragment = NewsPostBodyImagesFragment;

type SlicesNewsPostBody_PrismicNewsPostBodyVideo_Fragment = NewsPostBodyVideoFragment;

type SlicesNewsPostBody_PrismicNewsPostBodyTextIntro_Fragment = NewsPostBodyTextIntroFragment;

type SlicesNewsPostBody_PrismicNewsPostBodyAnchor_Fragment = NewsPostBodyAnchorFragment;

export type SlicesNewsPostBodyFragment = SlicesNewsPostBody_PrismicNewsPostBodyText_Fragment | SlicesNewsPostBody_PrismicNewsPostBodyImages_Fragment | SlicesNewsPostBody_PrismicNewsPostBodyVideo_Fragment | SlicesNewsPostBody_PrismicNewsPostBodyTextIntro_Fragment | SlicesNewsPostBody_PrismicNewsPostBodyAnchor_Fragment;

export type NewsPostBodyAnchorFragment = { primary?: Maybe<Pick<PrismicNewsPostBodyAnchorPrimaryType, 'id'>> };

export type NewsPostBodyImagesFragment = { items?: Maybe<Array<Maybe<{ image?: Maybe<(
      Pick<PrismicImageType, 'alt' | 'url'>
      & { fluid?: Maybe<GatsbyPrismicImageFluidFragment> }
    )>, caption?: Maybe<Pick<PrismicStructuredTextType, 'html' | 'text'>> }>>> };

export type NewsPostBodyLinkCardFragment = { primary?: Maybe<{ link_title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, link?: Maybe<Pick<PrismicLinkType, 'url'>> }> };

export type NewsPostBodyTextFragment = { primary?: Maybe<{ text?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>> }> };

export type NewsPostBodyTextIntroFragment = { primary?: Maybe<{ introductory_text?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>> }> };

export type NewsPostBodyVideoFragment = { primary?: Maybe<{ video?: Maybe<Pick<PrismicEmbedType, 'embed_url' | 'thumbnail_url' | 'thumbnail_height' | 'thumbnail_width'>>, poster?: Maybe<(
      Pick<PrismicImageType, 'alt'>
      & { fluid?: Maybe<GatsbyPrismicImageFluidFragment> }
    )> }> };

type SlicesPageBody_PrismicPageBodyText_Fragment = PageBodyTextFragment;

type SlicesPageBody_PrismicPageBodyImages_Fragment = PageBodyImagesFragment;

type SlicesPageBody_PrismicPageBodyHeroImage_Fragment = PageBodyHeroImageFragment;

type SlicesPageBody_PrismicPageBodyQuoteSlideshow_Fragment = PageBodyQuoteSlideshowFragment;

type SlicesPageBody_PrismicPageBodyLearningExcursionMap_Fragment = PageBodyLearningExcursionMapFragment;

export type SlicesPageBodyFragment = SlicesPageBody_PrismicPageBodyText_Fragment | SlicesPageBody_PrismicPageBodyImages_Fragment | SlicesPageBody_PrismicPageBodyHeroImage_Fragment | SlicesPageBody_PrismicPageBodyQuoteSlideshow_Fragment | SlicesPageBody_PrismicPageBodyLearningExcursionMap_Fragment;

export type PageBodyAnchorFragment = { primary?: Maybe<Pick<PrismicPageBodyAnchorPrimaryType, 'id'>> };

export type PageBodyHeroImageFragment = { primary?: Maybe<{ text?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>>, button_text?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, button_link?: Maybe<Pick<PrismicLinkType, 'url'>>, background_image?: Maybe<(
      Pick<PrismicImageType, 'alt'>
      & { fluid?: Maybe<GatsbyPrismicImageFluidFragment> }
    )> }> };

export type PageBodyImagesFragment = { items?: Maybe<Array<Maybe<{ image?: Maybe<(
      Pick<PrismicImageType, 'alt' | 'url'>
      & { fluid?: Maybe<GatsbyPrismicImageFluidFragment> }
    )>, caption?: Maybe<Pick<PrismicStructuredTextType, 'html' | 'text'>> }>>> };

export type PageBodyLearningExcursionMapFragment = { primary?: Maybe<(
    Pick<PrismicPageBodyLearningExcursionMapPrimaryType, 'map_url'>
    & { text?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>> }
  )>, items?: Maybe<Array<Maybe<{ video_link?: Maybe<Pick<PrismicLinkType, 'url'>>, fellow_name?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, fellow_photo?: Maybe<(
      Pick<PrismicImageType, 'alt'>
      & { fluid?: Maybe<GatsbyPrismicImageFluidFragment> }
    )> }>>> };

export type PageBodyQuoteSlideshowFragment = { items?: Maybe<Array<Maybe<{ quote?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, quotee_name?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, quotee_title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, photo?: Maybe<(
      Pick<PrismicImageType, 'alt'>
      & { fluid?: Maybe<GatsbyPrismicImageFluidFragment> }
    )> }>>> };

export type PageBodyTextFragment = { primary?: Maybe<{ text?: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>> }> };

export type InteriorPageTemplateQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type InteriorPageTemplateQuery = { prismicInteriorPage?: Maybe<(
    Pick<PrismicInteriorPage, '_previewable'>
    & { data?: Maybe<(
      Pick<PrismicInteriorPageDataType, 'meta_title' | 'meta_description'>
      & { title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, header?: Maybe<Array<Maybe<(
        { __typename: 'PrismicInteriorPageHeaderHeroImage' }
        & Pick<PrismicInteriorPageHeaderHeroImage, 'id'>
        & SlicesInteriorPageHeaderFragment
      )>>>, body?: Maybe<Array<Maybe<(
        { __typename: 'PrismicInteriorPageBodyText' }
        & Pick<PrismicInteriorPageBodyText, 'id'>
        & SlicesInteriorPageBody_PrismicInteriorPageBodyText_Fragment
      ) | (
        { __typename: 'PrismicInteriorPageBodyImages' }
        & Pick<PrismicInteriorPageBodyImages, 'id'>
        & SlicesInteriorPageBody_PrismicInteriorPageBodyImages_Fragment
      ) | (
        { __typename: 'PrismicInteriorPageBodyVideo' }
        & Pick<PrismicInteriorPageBodyVideo, 'id'>
        & SlicesInteriorPageBody_PrismicInteriorPageBodyVideo_Fragment
      ) | (
        { __typename: 'PrismicInteriorPageBodyTextIntro' }
        & Pick<PrismicInteriorPageBodyTextIntro, 'id'>
        & SlicesInteriorPageBody_PrismicInteriorPageBodyTextIntro_Fragment
      ) | (
        { __typename: 'PrismicInteriorPageBodyAnchor' }
        & Pick<PrismicInteriorPageBodyAnchor, 'id'>
        & SlicesInteriorPageBody_PrismicInteriorPageBodyAnchor_Fragment
      ) | (
        { __typename: 'PrismicInteriorPageBodyCohortSchedule' }
        & Pick<PrismicInteriorPageBodyCohortSchedule, 'id'>
        & SlicesInteriorPageBody_PrismicInteriorPageBodyCohortSchedule_Fragment
      ) | (
        { __typename: 'PrismicInteriorPageBodyDivider' }
        & Pick<PrismicInteriorPageBodyDivider, 'id'>
        & SlicesInteriorPageBody_PrismicInteriorPageBodyDivider_Fragment
      ) | (
        { __typename: 'PrismicInteriorPageBodyStaffDirectory' }
        & Pick<PrismicInteriorPageBodyStaffDirectory, 'id'>
        & SlicesInteriorPageBody_PrismicInteriorPageBodyStaffDirectory_Fragment
      )>>> }
    )> }
    & PrismicInteriorPageParentRecursiveFragment
  )> };

export type NewsTemplateQueryVariables = Exact<{
  limit: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type NewsTemplateQuery = { prismicPage?: Maybe<(
    Pick<PrismicPage, '_previewable'>
    & { data?: Maybe<(
      Pick<PrismicPageDataType, 'meta_title' | 'meta_description'>
      & { title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, body?: Maybe<Array<Maybe<(
        { __typename: 'PrismicPageBodyText' }
        & Pick<PrismicPageBodyText, 'id'>
        & SlicesPageBody_PrismicPageBodyText_Fragment
      ) | (
        { __typename: 'PrismicPageBodyImages' }
        & Pick<PrismicPageBodyImages, 'id'>
        & SlicesPageBody_PrismicPageBodyImages_Fragment
      ) | (
        { __typename: 'PrismicPageBodyAnchor' }
        & Pick<PrismicPageBodyAnchor, 'id'>
        & SlicesPageBody_PrismicPageBodyAnchor_Fragment
      ) | (
        { __typename: 'PrismicPageBodyHeroImage' }
        & Pick<PrismicPageBodyHeroImage, 'id'>
        & SlicesPageBody_PrismicPageBodyHeroImage_Fragment
      ) | (
        { __typename: 'PrismicPageBodyQuoteSlideshow' }
        & Pick<PrismicPageBodyQuoteSlideshow, 'id'>
        & SlicesPageBody_PrismicPageBodyQuoteSlideshow_Fragment
      ) | (
        { __typename: 'PrismicPageBodyLearningExcursionMap' }
        & Pick<PrismicPageBodyLearningExcursionMap, 'id'>
        & SlicesPageBody_PrismicPageBodyLearningExcursionMap_Fragment
      ) | (
        { __typename: 'PrismicPageBodyFellowsGrid' }
        & Pick<PrismicPageBodyFellowsGrid, 'id'>
        & SlicesPageBody_PrismicPageBodyFellowsGrid_Fragment
      )>>> }
    )> }
    & PrismicPageParentRecursiveFragment
  )>, allPrismicNewsPost: { nodes: Array<(
      Pick<PrismicNewsPost, 'url' | 'first_publication_date'>
      & { data?: Maybe<(
        Pick<PrismicNewsPostDataType, 'published_at'>
        & { title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, excerpt?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, news_categories?: Maybe<Array<Maybe<{ news_category?: Maybe<{ document?: Maybe<(
              Pick<PrismicNewsCategory, 'uid' | 'url'>
              & { data?: Maybe<{ name?: Maybe<Pick<PrismicStructuredTextType, 'text'>> }> }
            )> }> }>>>, featured_image?: Maybe<(
          Pick<PrismicImageType, 'alt'>
          & { fluid?: Maybe<GatsbyPrismicImageFluidFragment> }
        )> }
      )> }
    )> } };

export type NewsCategoryTemplateQueryVariables = Exact<{
  uid: Scalars['String'];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type NewsCategoryTemplateQuery = { prismicPage?: Maybe<(
    Pick<PrismicPage, '_previewable'>
    & { data?: Maybe<(
      Pick<PrismicPageDataType, 'meta_title' | 'meta_description'>
      & { title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, body?: Maybe<Array<Maybe<(
        { __typename: 'PrismicPageBodyText' }
        & Pick<PrismicPageBodyText, 'id'>
        & SlicesPageBody_PrismicPageBodyText_Fragment
      ) | (
        { __typename: 'PrismicPageBodyImages' }
        & Pick<PrismicPageBodyImages, 'id'>
        & SlicesPageBody_PrismicPageBodyImages_Fragment
      ) | (
        { __typename: 'PrismicPageBodyAnchor' }
        & Pick<PrismicPageBodyAnchor, 'id'>
        & SlicesPageBody_PrismicPageBodyAnchor_Fragment
      ) | (
        { __typename: 'PrismicPageBodyHeroImage' }
        & Pick<PrismicPageBodyHeroImage, 'id'>
        & SlicesPageBody_PrismicPageBodyHeroImage_Fragment
      ) | (
        { __typename: 'PrismicPageBodyQuoteSlideshow' }
        & Pick<PrismicPageBodyQuoteSlideshow, 'id'>
        & SlicesPageBody_PrismicPageBodyQuoteSlideshow_Fragment
      ) | (
        { __typename: 'PrismicPageBodyLearningExcursionMap' }
        & Pick<PrismicPageBodyLearningExcursionMap, 'id'>
        & SlicesPageBody_PrismicPageBodyLearningExcursionMap_Fragment
      ) | (
        { __typename: 'PrismicPageBodyFellowsGrid' }
        & Pick<PrismicPageBodyFellowsGrid, 'id'>
        & SlicesPageBody_PrismicPageBodyFellowsGrid_Fragment
      )>>> }
    )> }
    & PrismicPageParentRecursiveFragment
  )>, prismicNewsCategory?: Maybe<(
    Pick<PrismicNewsCategory, '_previewable' | 'uid' | 'url'>
    & { data?: Maybe<{ name?: Maybe<Pick<PrismicStructuredTextType, 'text'>> }> }
  )>, allPrismicNewsPost: { nodes: Array<(
      Pick<PrismicNewsPost, 'url' | 'first_publication_date'>
      & { data?: Maybe<(
        Pick<PrismicNewsPostDataType, 'published_at'>
        & { title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, excerpt?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, news_categories?: Maybe<Array<Maybe<{ news_category?: Maybe<{ document?: Maybe<(
              Pick<PrismicNewsCategory, 'uid' | 'url'>
              & { data?: Maybe<{ name?: Maybe<Pick<PrismicStructuredTextType, 'text'>> }> }
            )> }> }>>>, featured_image?: Maybe<(
          Pick<PrismicImageType, 'alt'>
          & { fluid?: Maybe<GatsbyPrismicImageFluidFragment> }
        )> }
      )> }
    )> } };

export type NewsPostTemplateQueryVariables = Exact<{
  uid: Scalars['String'];
  nextUID?: Maybe<Scalars['String']>;
  prevUID?: Maybe<Scalars['String']>;
}>;


export type NewsPostTemplateQuery = { prismicNewsPost?: Maybe<(
    Pick<PrismicNewsPost, '_previewable' | 'uid' | 'first_publication_date'>
    & { data?: Maybe<(
      Pick<PrismicNewsPostDataType, 'published_at'>
      & { title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, excerpt?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, news_categories?: Maybe<Array<Maybe<{ news_category?: Maybe<{ document?: Maybe<(
            Pick<PrismicNewsCategory, 'uid' | 'url'>
            & { data?: Maybe<{ name?: Maybe<Pick<PrismicStructuredTextType, 'text'>> }> }
          )> }> }>>>, featured_image?: Maybe<(
        Pick<PrismicImageType, 'alt'>
        & { fluid?: Maybe<GatsbyPrismicImageFluidFragment> }
      )>, body?: Maybe<Array<Maybe<(
        { __typename: 'PrismicNewsPostBodyText' }
        & Pick<PrismicNewsPostBodyText, 'id'>
        & SlicesNewsPostBody_PrismicNewsPostBodyText_Fragment
      ) | (
        { __typename: 'PrismicNewsPostBodyImages' }
        & Pick<PrismicNewsPostBodyImages, 'id'>
        & SlicesNewsPostBody_PrismicNewsPostBodyImages_Fragment
      ) | (
        { __typename: 'PrismicNewsPostBodyVideo' }
        & Pick<PrismicNewsPostBodyVideo, 'id'>
        & SlicesNewsPostBody_PrismicNewsPostBodyVideo_Fragment
      ) | (
        { __typename: 'PrismicNewsPostBodyTextIntro' }
        & Pick<PrismicNewsPostBodyTextIntro, 'id'>
        & SlicesNewsPostBody_PrismicNewsPostBodyTextIntro_Fragment
      ) | (
        { __typename: 'PrismicNewsPostBodyAnchor' }
        & Pick<PrismicNewsPostBodyAnchor, 'id'>
        & SlicesNewsPostBody_PrismicNewsPostBodyAnchor_Fragment
      ) | (
        { __typename: 'PrismicNewsPostBodyDivider' }
        & Pick<PrismicNewsPostBodyDivider, 'id'>
        & SlicesNewsPostBody_PrismicNewsPostBodyDivider_Fragment
      ) | (
        { __typename: 'PrismicNewsPostBodyLinkCard' }
        & Pick<PrismicNewsPostBodyLinkCard, 'id'>
        & SlicesNewsPostBody_PrismicNewsPostBodyLinkCard_Fragment
      )>>> }
    )> }
  )>, nextPrismicNewsPost?: Maybe<NewsPostTemplatePaginatedNewsPostFragment>, prevPrismicNewsPost?: Maybe<NewsPostTemplatePaginatedNewsPostFragment> };

export type NewsPostTemplatePaginatedNewsPostFragment = (
  Pick<PrismicNewsPost, 'url' | 'first_publication_date'>
  & { data?: Maybe<(
    Pick<PrismicNewsPostDataType, 'published_at'>
    & { title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, excerpt?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, featured_image?: Maybe<(
      Pick<PrismicImageType, 'alt'>
      & { fluid?: Maybe<GatsbyPrismicImageFluidFragment> }
    )> }
  )> }
);

export type PageTemplateQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type PageTemplateQuery = { prismicPage?: Maybe<(
    Pick<PrismicPage, '_previewable'>
    & { data?: Maybe<(
      Pick<PrismicPageDataType, 'meta_title' | 'meta_description'>
      & { title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>, body?: Maybe<Array<Maybe<(
        { __typename: 'PrismicPageBodyText' }
        & Pick<PrismicPageBodyText, 'id'>
        & SlicesPageBody_PrismicPageBodyText_Fragment
      ) | (
        { __typename: 'PrismicPageBodyImages' }
        & Pick<PrismicPageBodyImages, 'id'>
        & SlicesPageBody_PrismicPageBodyImages_Fragment
      ) | (
        { __typename: 'PrismicPageBodyAnchor' }
        & Pick<PrismicPageBodyAnchor, 'id'>
        & SlicesPageBody_PrismicPageBodyAnchor_Fragment
      ) | (
        { __typename: 'PrismicPageBodyHeroImage' }
        & Pick<PrismicPageBodyHeroImage, 'id'>
        & SlicesPageBody_PrismicPageBodyHeroImage_Fragment
      ) | (
        { __typename: 'PrismicPageBodyQuoteSlideshow' }
        & Pick<PrismicPageBodyQuoteSlideshow, 'id'>
        & SlicesPageBody_PrismicPageBodyQuoteSlideshow_Fragment
      ) | (
        { __typename: 'PrismicPageBodyLearningExcursionMap' }
        & Pick<PrismicPageBodyLearningExcursionMap, 'id'>
        & SlicesPageBody_PrismicPageBodyLearningExcursionMap_Fragment
      ) | (
        { __typename: 'PrismicPageBodyFellowsGrid' }
        & Pick<PrismicPageBodyFellowsGrid, 'id'>
        & SlicesPageBody_PrismicPageBodyFellowsGrid_Fragment
      )>>> }
    )> }
    & PrismicPageParentRecursiveFragment
  )> };
