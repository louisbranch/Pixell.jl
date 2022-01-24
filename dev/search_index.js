var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = Pixell","category":"page"},{"location":"#Pixell","page":"Home","title":"Pixell","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for Pixell.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [Pixell]","category":"page"},{"location":"#Pixell.Enmap","page":"Home","title":"Pixell.Enmap","text":"Map type, contains an AbstractArray and a WCS object, but behaves like the AbstractArray it contains for array operations. It only implements the subset of Base.Array operations which are common on maps. You should work with the data directly using enmap_instance.data if you need additional Array functions.\n\n\n\n\n\n","category":"type"},{"location":"#Pixell.fullsky_geometry-Tuple{Type{<:CarClenshawCurtis}, Any}","page":"Home","title":"Pixell.fullsky_geometry","text":"fullsky_geometry([P=CarClenshawCurtis], res; shape = nothing, dims = ())\n\nArguments:\n\nproj=CarClenshawCurtis: [optional] projection\nres: resolution in radians. Passing a Number produces a square pixel.   Passing a tuple with (ΔRA, ΔDEC) produces a rectangular pixel.\n\nKeywords\n\nshape::NTuple=nothing: shape of the map. If not specified, will be computed.\ndims::NTuple=(): additional dimensions to append to the shape, such as (3,) for IQU   to generate a map with (nx, ny, 3).\n\nReturns:\n\nshape::Tuple, wcs::WCSTransform: a tuple containing the shape of the map and the WCS\n\nExamples\n\njulia> shape, wcs = fullsky_geometry(deg2rad(30/60))  # 30 arcmin pixel\n((720, 361), WCSTransform(naxis=2,cdelt=[-0.5, 0.5],crval=[0.25, 0.0],crpix=[360.5, 181.0]))\n\n\n\n\n\n","category":"method"}]
}
