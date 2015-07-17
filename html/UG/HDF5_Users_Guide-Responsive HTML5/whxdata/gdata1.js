gXMLBuffer ="<?xml version=\"1.0\" encoding=\"utf-8\" ?><data>   <entry name=\"attribute\" value=\"An HDF5 attribute&#160;is a small metadata object describing the nature and/or intended usage of a primary data object. A primary data object may be a dataset, group, or committed datatype.\" />   <entry name=\"Chunked\" value=\"Chunked\" />   <entry name=\"Chunked Storage\" value=\"Chunked Storage\" />   <entry name=\"committed datatype\" value=\"A datatype can be shared by more than one dataset in the file if the datatype is saved to the file with a name. This shareable datatype is known as a committed datatype. In the past, this kind of datatype was called a named datatype.\" />   <entry name=\"Compact\" value=\"Compact\" />   <entry name=\"composite datatype\" value=\"In addition to atomic datatypes, the HDF5 Library supports composite datatypes. A composite datatype is an aggregation of one or more datatypes. Each class of composite datatypes has properties that describe the organization of the composite datatype. See the figure below. Composite datatypes include:\" />   <entry name=\"compound\" value=\"To create and use a compound datatype, you need to create a datatype with class compound (H5T_COM­POUND) and specify the total size of the data element in bytes. A compound datatype consists of zero or more uniquely named members. Members can be defined in any order but must occupy non-overlapping regions within the datum. The table below lists the properties of compound datatype members.\" />   <entry name=\"compound datatype\" value=\"A compound datatype&#160;is a collection of one or more data elements. Each element might be an atomic type, a small array, or another compound datatype.\" />   <entry name=\"Contiguous\" value=\"Contiguous\" />   <entry name=\"Contiguous Storage\" value=\"Contiguous Storage\" />   <entry name=\"dangling link\" value=\"Note that an object’s existence in a file is governed by the presence of at least one hard link to that object. If the last hard link to an object is removed, the object is removed from the file and any remaining soft link becomes a dangling link, a link whose target object does not exist.\" />   <entry name=\"Data Pipeline\" value=\"The Data Pipeline\" />   <entry name=\"Data Pipeline Filters\" value=\"Data Pipeline Filters\" />   <entry name=\"Data Transfer Properties\" value=\"Data Transfer Properties\" />   <entry name=\"dataset header\" value=\"A dataset header consists of one or more header messages containing persistent metadata describing var­ious aspects of the dataset. These records are defined in the HDF5 File Format Specification. The amount of storage required for the metadata depends on the metadata to be stored. The table below summarizes the metadata.\" />   <entry name=\"dataset name\" value=\"A dataset name is a sequence of alphanumeric ASCII characters. The full name would include a tracing of the group hierarchy from the root group of the file. An example is /rootGroup/groupA/subgroup23/dataset1. The local name or relative name within the lowest-level group containing the dataset would include none of the group hierarchy. An example is Dataset1.\" />   <entry name=\"Dataspace\" value=\"Dataspace\" />   <entry name=\"dataspace extent\" value=\"A simple dataspace, H5S_SIMPLE, is a multidimensional array of elements. The dimensionality of the dataspace (or the rank of the array) is fixed and is defined at creation time. The size of each dimension can grow during the life time of the dataspace from the current size&#160;up to the maximum size. Both the current size and the maximum size are specified at creation time. The sizes of dimensions at any particular time in the life of a dataspace are called the current dimensions, or the dataspace extent. They can be queried along with the maximum sizes.\" />   <entry name=\"dataspace selection\" value=\"The data transfer will transfer some or all of the elements of the dataset depending on the dataspace selection. The selection has two dataspace objects: one for the source, and one for the destination. These objects describe which elements of the dataspace to be transferred. Some (partial I/O) or all of the data may be transferred. Partial I/O is defined by defining hyperslabs or lists of elements in a dataspace object.\" />   <entry name=\"Datatype\" value=\"Datatype\" />   <entry name=\"Early allocation\" value=\"The table below shows the options for when data is allocated in the file. Early allocation is done during the dataset create call. Certain file drivers (especially MPI-I/O and MPI-POSIX) require space to be allocated when a dataset is created, so all processors will have the correct view of the data.\" />   <entry name=\"error description\" value=\"In the example above, we can see that an error record&#160;has a major message and a minor message. A major message&#160;generally indicates where the error happens. The location can be a dataset or a dataspace, for example. A minor message&#160;explains further details of the error. An example is “unable to open file”. Another specific detail about the error can be found at the end of the first line of each error record. This error description&#160;is usually added by the library designer to tell what exactly goes wrong. In the example above, the “predefined datatype” is an error description.\" />   <entry name=\"error record\" value=\"In the example above, we can see that an error record&#160;has a major message and a minor message. A major message&#160;generally indicates where the error happens. The location can be a dataset or a dataspace, for example. A minor message&#160;explains further details of the error. An example is “unable to open file”. Another specific detail about the error can be found at the end of the first line of each error record. This error description&#160;is usually added by the library designer to tell what exactly goes wrong. In the example above, the “predefined datatype” is an error description.\" />   <entry name=\"error stack\" value=\"Let us first try to understand the error stack. An error stack&#160;is a collection of error records. &#160;&#160;Error records can be pushed onto or popped off the error stack. By default, when an error occurs deep within the HDF5 Library, an error record is pushed onto an error stack and that function returns a failure indication. Its caller detects the failure, pushes another record onto the stack, and returns a failure indication. This con­tinues until the API function called by the application returns a failure indication. The next API function being called will reset the error stack. All HDF5 Library error records belong to the same error class. For more information, see &quot;Advanced Error Handling Operations&quot; on page&#160;329.\" />   <entry name=\"Filters\" value=\"Filters\" />   <entry name=\"hard links\" value=\"There are two kinds of links, hard links&#160;and symbolic links. Hard links are reference counted; symbolic links are not. When an object is created, a hard link is automatically created. An object can be deleted from the file by removing all the hard links to it.\" />   <entry name=\"hyperslab\" value=\"The more general case of a hyperslab&#160;can also be a regular pattern of points or blocks within the dataspace. Four parameters are required to describe a general hyperslab: the starting coordinates, the block size, the stride or space between blocks, and the number of blocks. These parameters are each expressed as a one-dimensional array with length equal to the rank of the dataspace and are described in the table below.\" />   <entry name=\"Incremental allocation\" value=\"Incremental allocation (chunks only) is done at the time of the first write to the chunk. Chunks that have never been written are not allocated in the file. In a sparsely populated dataset, this option allocates chunks only where data is actually written.\" />   <entry name=\"Late allocation\" value=\"Late allocation is done at the time of the first write to dataset. Space for the whole dataset is allocated at the first write.\" />   <entry name=\"link\" value=\"A link is, in effect, a path by which the target object can be accessed; it therefore has a name which func­tions as a single path component. A link can be removed with an H5Ldelete&#160;call, effectively removing the target object from the group that contained the link (assuming, of course, that the removed link was the only link to the target object in the group).\" />   <entry name=\"major message\" value=\"In the example above, we can see that an error record&#160;has a major message and a minor message. A major message&#160;generally indicates where the error happens. The location can be a dataset or a dataspace, for example. A minor message&#160;explains further details of the error. An example is “unable to open file”. Another specific detail about the error can be found at the end of the first line of each error record. This error description&#160;is usually added by the library designer to tell what exactly goes wrong. In the example above, the “predefined datatype” is an error description.\" />   <entry name=\"Memory Datatype\" value=\"Memory Datatype\" />   <entry name=\"Memory Space\" value=\"Memory Space\" />   <entry name=\"minor message\" value=\"In the example above, we can see that an error record&#160;has a major message and a minor message. A major message&#160;generally indicates where the error happens. The location can be a dataset or a dataspace, for example. A minor message&#160;explains further details of the error. An example is “unable to open file”. Another specific detail about the error can be found at the end of the first line of each error record. This error description&#160;is usually added by the library designer to tell what exactly goes wrong. In the example above, the “predefined datatype” is an error description.\" />   <entry name=\"N-bit Datatype\" value=\"N-bit Datatype\" />   <entry name=\"N-bit Filter\" value=\"N-bit Filter\" />   <entry name=\"Name\" value=\"Name\" />   <entry name=\"named datatype\" value=\"A datatype can be shared by more than one dataset in the file if the datatype is saved to the file with a name. This shareable datatype is known as a committed datatype. In the past, this kind of datatype was called a named datatype.\" />  </data>";