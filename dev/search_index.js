var documenterSearchIndex = {"docs":
[{"location":"map_manipulation/","page":"Map Manipulation","title":"Map Manipulation","text":"CurrentModule = Pixell","category":"page"},{"location":"map_manipulation/#Map-Manipulation","page":"Map Manipulation","title":"Map Manipulation","text":"","category":"section"},{"location":"map_manipulation/#Relating-pixels-to-the-sky","page":"Map Manipulation","title":"Relating pixels to the sky","text":"","category":"section"},{"location":"api/#Index","page":"API","title":"Index","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"api/","page":"API","title":"API","text":"Modules = [Pixell]","category":"page"},{"location":"api/#Pixell.CarClenshawCurtis","page":"API","title":"Pixell.CarClenshawCurtis","text":"Fast custom WCS structure.\n\n\n\n\n\n","category":"type"},{"location":"api/#Pixell.Enmap","page":"API","title":"Pixell.Enmap","text":"Map type, contains an AbstractArray and a WCS object, but behaves like the AbstractArray it contains for array operations. It only implements the subset of Base.Array operations which are common on maps. You should work with the data directly using enmap_instance.data if you need additional Array functions.\n\n\n\n\n\n","category":"type"},{"location":"api/#Pixell.fullsky_geometry-Tuple{Type{<:WCS.AbstractWCSTransform}, Any}","page":"API","title":"Pixell.fullsky_geometry","text":"fullsky_geometry([W=CarClenshawCurtis], res; shape = nothing, dims = ())\n\nGenerates a full-sky geometry.\n\nArguments:\n\nproj=CarClenshawCurtis(): [optional] projection\nres: resolution in radians. Passing a Number produces a square pixel.\n\nPassing a tuple with (ΔRA, ΔDEC) produces a rectangular pixel.\n\nKeywords\n\nshape::NTuple=nothing: shape of the map. If not specified, will be computed.\ndims::NTuple=(): additional dimensions to append to the shape, such as (3,) for IQU\n\nto generate a map with (nx, ny, 3).\n\nReturns:\n\nshape::Tuple, wcs::W: a tuple containing the shape of the map and the WCS\n\nExamples\n\njulia> shape, wcs = fullsky_geometry(deg2rad(30/60))  # 30 arcmin pixel\n((720, 361), WCSTransform(naxis=2,cdelt=[-0.5, 0.5],crval=[0.25, 0.0],crpix=[360.5, 181.0]))\n\n\n\n\n\n","category":"method"},{"location":"api/#Pixell.pix2sky","page":"API","title":"Pixell.pix2sky","text":"pix2sky(m::Enmap, pixcoords)\n\nConvert 1-indexed pixels to sky coordinates. The output sky coordinates are determined by WCS, but usually are in units of degrees. \n\nArguments:\n\nm::Enmap: the map that provides a coordinate system\npixcoords: pixcoords should be a 2-d array where \"pixcoords[:, i]\" is the i-th set of coordinates,    or a 1-d array representing a single set of coordinates. \n\nReturns:\n\nArray: same shape as pixcoords\n\nExamples\n\njulia> shape, wcs = fullsky_geometry(deg2rad(1))\n       m = Enmap(rand(shape...), wcs)\njulia> pix2sky(m, [1.0, 1.0])\n2-element Vector{Float64}:\n 180.0\n -90.0\n\n\n\n\n\n","category":"function"},{"location":"api/#Pixell.pix2sky!-Union{Tuple{TS}, Tuple{TP}, Tuple{AA}, Tuple{N}, Tuple{T}, Tuple{Enmap{T, N, AA, <:CarClenshawCurtis}, AbstractMatrix{TP}, AbstractMatrix{TS}}} where {T, N, AA<:AbstractArray{T, N}, TP, TS}","page":"API","title":"Pixell.pix2sky!","text":"pix2sky!(m::Enmap, pixcoords, skycoords)\n\nConvert 1-indexed pixels to sky coordinates, in-place. The output sky coordinates are  determined by WCS, but usually are in units of degrees. \n\nArguments:\n\nm::Enmap: the map that provides a coordinate system\npixcoords: pixel coordinates should be a 2-d array where \"pixcoords[:, i]\" is the i-th    set of coordinates, or a 1-d array representing a single set of coordinates. \nskycoords: output array for sky coordinates, must be same same as pixcoords\n\nReturns:\n\nArray: skycoords\n\nExamples\n\njulia> shape, wcs = fullsky_geometry(deg2rad(1))\n       m = Enmap(rand(shape...), wcs)\n       pixcoords =  100 .* rand(2,4096 * 2)\n       skycoords =  similar(pixcoords)\n\njulia> pix2sky!(m, pixcoords, skycoords)\n\n\n\n\n\n","category":"method"},{"location":"api/#Pixell.pix2sky-Union{Tuple{AA}, Tuple{N}, Tuple{T}, Tuple{Enmap{T, N, AA, <:CarClenshawCurtis}, Any, Any}} where {T, N, AA<:AbstractArray{T, N}}","page":"API","title":"Pixell.pix2sky","text":"pix2sky(m::Enmap{T,N,AA,<:CarClenshawCurtis}, ra_pixel, dec_pixel)\n\nCompute the sky position of a single position on the sky.\n\nOnly implemented for CAR (Clenshaw-Curtis variant) projections, so the input map is of type Enmap{T,N,AA,<:CarClenshawCurtis}. This takes pixel indices for RA and DEC, and returns a tuple containing the corresponding RA and DEC.\n\nExamples\n\njulia> shape, wcs = fullsky_geometry(deg2rad(1))\n       m = Enmap(rand(shape...), wcs)\njulia> pix2sky(m, 30.0, 80.0)\n(151.0, -11.0)\n\n\n\n\n\n","category":"method"},{"location":"api/#Pixell.rewind-Tuple{Any}","page":"API","title":"Pixell.rewind","text":"rewind(angles, period=2π, ref_angle=0)\n\nGiven angles or other cyclic coordinates with the specified period, such that the angle + period has the same meaning as the original angle, this function adds or subtracts  multiples of the period such that the result has the same meaning, but now all angles lie in an interval of length the specified period, centered on the reference angle ref_angle.\n\n\n\n\n\n","category":"method"},{"location":"api/#Pixell.sky2pix","page":"API","title":"Pixell.sky2pix","text":"sky2pix(m::Enmap, skycoords)\n\nConvert sky coordinates to 1-indexed pixels. The input sky coordinates are determined by WCS, but usually are in units of degrees. \n\nArguments:\n\nm::Enmap: the map to obtain the coordinates from\nskycoords: skycoords should be a 2-d array where \"skycoords[:, i]\" is the i-th set of coordinates,    or a 1-d array representing a single set of coordinates. \n\nReturns:\n\nArray: same shape as skycoords\n\nExamples\n\njulia> shape, wcs = fullsky_geometry(deg2rad(1))\n       m = Enmap(rand(shape...), wcs)\njulia> sky2pix(m, [30.0, 50.0])\n2-element Vector{Float64}:\n 151.0\n 141.0\n\n\n\n\n\n","category":"function"},{"location":"api/#Pixell.sky2pix!-Union{Tuple{TP}, Tuple{TS}, Tuple{AA}, Tuple{N}, Tuple{T}, Tuple{Enmap{T, N, AA, <:CarClenshawCurtis}, AbstractMatrix{TS}, AbstractMatrix{TP}}} where {T, N, AA<:AbstractArray{T, N}, TS, TP}","page":"API","title":"Pixell.sky2pix!","text":"sky2pix!(m::Enmap, skycoords, pixcoords)\n\nConvert sky coordinates to 1-indexed pixels, in-place. The input sky coordinates are  determined by WCS, but usually are in units of degrees. \n\nArguments:\n\nm::Enmap: the map that provides a coordinate system\nskycoords: sky coordinates should be a 2-d array where \"skycoords[:, i]\" is the i-th    set of coordinates, or a 1-d array representing a single set of coordinates. \npixcoords: output array for pixel coordinates, must be same same as pixcoords\n\nReturns:\n\nArray: pixcoords\n\nExamples\n\njulia> shape, wcs = fullsky_geometry(deg2rad(1))\n       m = Enmap(rand(shape...), wcs)\n       skycoords =  similar(pixcoords)\n       pixcoords =  100 .* rand(2,4096 * 2)\njulia> sky2pix!(m, skycoords, pixcoords)\n\n\n\n\n\n","category":"method"},{"location":"api/#Pixell.sky2pix-Union{Tuple{AA}, Tuple{N}, Tuple{T}, Tuple{Enmap{T, N, AA, <:CarClenshawCurtis}, Number, Number}} where {T, N, AA<:AbstractArray{T, N}}","page":"API","title":"Pixell.sky2pix","text":"sky2pix(m::Enmap{T,N,AA,<:CarClenshawCurtis}, ra, dec)\n\nCompute 1-indexed pixels into sky coordinates.\n\nOnly implemented for CAR (Clenshaw-Curtis variant) projections. Takes  RA and DEC and returns a tuple containing the corresponding pixel indices. If vectors of RA and DEC are given, then vectors of  pixel indices will be returned.\n\nExamples\n\njulia> shape, wcs = fullsky_geometry(deg2rad(1))\n       m = Enmap(rand(shape...), wcs)\njulia> sky2pix(m, 30.0, 80.0)\n(151.0, 171.0)\n\n\n\n\n\n","category":"method"},{"location":"developer_notes/","page":"Developer Notes","title":"Developer Notes","text":"CurrentModule = Pixell","category":"page"},{"location":"developer_notes/#Developer-Notes","page":"Developer Notes","title":"Developer Notes","text":"","category":"section"},{"location":"developer_notes/","page":"Developer Notes","title":"Developer Notes","text":"If you're new to the Julia language, my favorite tutorial is this Introduction to Julia for Quantitative Economics. Sections 1-13 are the most relevant if you are an astronomer, but some of later numerical techniques can also be useful. Computing clusters will often have a Julia module; make sure you load a Julia version 1.6 or later. ","category":"page"},{"location":"developer_notes/","page":"Developer Notes","title":"Developer Notes","text":"For your development computer, download the precompiled binaries and add the Julia executable to your $PATH. Do not use a package manager to install Julia. The Julia compiler has a heavily modified glibc, which many package managers misconfigure (such as the AUR). This problem is also faced by Rust.","category":"page"},{"location":"developer_notes/#Package-development","page":"Developer Notes","title":"Package development","text":"","category":"section"},{"location":"developer_notes/","page":"Developer Notes","title":"Developer Notes","text":"To make changes to this package, start up the Julia interpeter and run","category":"page"},{"location":"developer_notes/","page":"Developer Notes","title":"Developer Notes","text":"julia> ] dev git@github.com:simonsobs/Pixell.jl.git","category":"page"},{"location":"developer_notes/","page":"Developer Notes","title":"Developer Notes","text":"By default, this will place a copy of this package's repository in your home directory, ~/.julia/dev/Pixell. Changes to the code in this folder will be reflected in your global environment.","category":"page"},{"location":"developer_notes/","page":"Developer Notes","title":"Developer Notes","text":"It can be helpful to write documentation alongside a live preview. This is accomplished with the LiveServer package. If you have a standard Julia installlation, you can run from the command line,","category":"page"},{"location":"developer_notes/","page":"Developer Notes","title":"Developer Notes","text":"cd $HOME/.julia/dev/Pixell\njulia --project=. -e \"using Pixell, LiveServer; servedocs()\"","category":"page"},{"location":"developer_notes/","page":"Developer Notes","title":"Developer Notes","text":"This will render HTML pages and provide an HTTP server for local previews. The documentation will automatically update when you make changes.","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = Pixell","category":"page"},{"location":"#Pixell.jl","page":"Home","title":"Pixell.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pixell is a package for high performance data analysis of sky maps with rectangular pixels. It is based on a subset of the Python package pixell. This package has a particular focus on astrophysical and cosmological science enabled by efficient map manipulation, easy multithreading and GPU support, and machine learning. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package manipulates maps on equidistant cylindrical projections (ECP) like plate carrée. It implements an array type equipped with WCS information. Another common pixelization of the sphere is Healpix.jl, which uses a constant size pixel with a more complicated pixel shape. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pixell supports development and deployment on a wide variety of platforms, ranging from laptops to computing clusters. Installation is as simple as starting up the Julia interpreter, and running","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> ] add Pixell","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"CurrentModule = Pixell","category":"page"},{"location":"tutorial/#Tutorial","page":"Tutorial","title":"Tutorial","text":"","category":"section"},{"location":"tutorial/#Reading-and-writing-maps","page":"Tutorial","title":"Reading and writing maps","text":"","category":"section"},{"location":"tutorial/#Making-some-plots","page":"Tutorial","title":"Making some plots","text":"","category":"section"},{"location":"tutorial/#Noteworthy-differences-from-Python","page":"Tutorial","title":"Noteworthy differences from Python","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The Julia language has a number of differences from Python, and the Pixell.jl has a number of important differences from the Python package pixell.","category":"page"}]
}
